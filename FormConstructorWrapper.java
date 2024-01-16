import java.io.*;

public class FormConstructorWrapper {
    public String runNodeApp(String businessName) throws IOException {

        ProcessBuilder processBuilder = new ProcessBuilder("node", "buildForm.js", businessName);
        processBuilder.redirectErrorStream(true);

        Process process = processBuilder.start();
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        StringBuilder output = new StringBuilder();
        String line;

        while ((line = reader.readLine()) != null) {
            output.append(line).append("\n");
        }

        return output.toString();
    }
}