import java.io.*;
import java.nio.file.*;
import java.time.LocalDate;

public class AnotherJavaClass {
    public static void main(String[] args) throws IOException {
        String businessName = "new business name 1"; // Replace with your business name
        FormConstructorWrapper wrapper = new FormConstructorWrapper();
        String output = wrapper.runNodeApp(businessName);

        String fileName = "DayBatchFormData" + LocalDate.now() + ".csv";
        Path path = Paths.get(fileName);
        if (Files.exists(path)) {
            Files.write(path, (businessName + "," + output + System.lineSeparator()).getBytes(), StandardOpenOption.APPEND);
        } else {
            PrintWriter writer = new PrintWriter(new File(fileName));
            writer.println("Business Name,formId,formUrl");
            writer.println(businessName + "," + output);
            writer.close();
        }

        System.out.println(businessName + "," + output);
    }
}