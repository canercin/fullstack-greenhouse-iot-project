package dev.canercin.greenhouseiot.service.Jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import java.security.Key;
import java.util.Date;
import java.util.function.Function;

@Service
public class JwtServiceImpl implements JwtService {
    private static final String secretKey = "4vWEJ7NgKtm97QktGjOZ925LNZxoAX7F9NiEaT0ABj1DUVb9Tb5PuMbjspmDwjEIAad330F9nG9SQclkgGy/hH9Cynt1GzJ2R0ODxv1mJ8ZQsSfNAb1E0s4Liivsn3kYyJEQZno70fd3Kxi0STv/IYmxU+A2jTPUcOGQn3qU707+W1bwlc+WAyiQt3d3znTYVRwMxBbT/6NXVvQFM9cy1sPWIwyAu0Yz3KW5nXpAtLnWCAMT0FhjiKCO20IqxO0Sugoz2PHwuwDmnDexg8kf0M06o90tM6XS2IICkGs9BnckE3MXg8fWOTpjZcG5lBS/0amsy84Xew5ThY7cySPM5wSL2jNqcBDGeUJMSEupMXU=";
    @Override
    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .signWith(getSecretKey(), SignatureAlgorithm.HS256)
                .claim("role", userDetails.getAuthorities())
                .compact();
    }

    @Override
    public String extractUsername(String token){
        return extractClaim(token, Claims::getSubject);
    }

    @Override
    public boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    private Key getSecretKey() {
        byte[] keyBytes = Decoders.BASE64.decode(this.secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token){
        return Jwts.parserBuilder().setSigningKey(getSecretKey()).build().parseClaimsJws(token).getBody();
    }
    private boolean isTokenExpired(String token) {
        return extractClaim(token, Claims::getExpiration).before(new Date());
    }
}
