# konnect-world 이벤트 페이지 배포

> 참고 : https://velog.io/@seongkyun/AWS-S3-CloudFront-Route53%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%A0%95%EC%A0%81-%ED%98%B8%EC%8A%A4%ED%8C%85#cloudfront-%EC%84%A4%EC%A0%95

1. s3 정적 웹 호스팅 설정
2. cloudfront로 s3 배포
3. AWS Certificate Manager(ACM)을 사용하여 konnect-world.com 도메인에 대해 SSL 생성
    - 이때 버지니아 북부에서 생성해야함
4. cloudfront ssl인증서 연결
5. route53 도메인에 cloudfront 연결
