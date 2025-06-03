package poiu.t3fazfila;
import java.util.Scanner;

public class t3 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Digite o número para fazer a fila: ");
        int n = sc.nextInt();
        sc.nextLine(); // Consumir o '\n' restante

        for (int i = 0; i <= n; i++) {
                System.out.print(i);
        }
    }
}