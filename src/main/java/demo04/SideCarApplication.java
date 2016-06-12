package demo04;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.sidecar.EnableSidecar;

@EnableSidecar
@SpringBootApplication
public class SideCarApplication {

    public static void main(final String[] args) {
        SpringApplication.run(SideCarApplication.class, args);
    }

}
