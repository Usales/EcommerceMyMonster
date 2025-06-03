package poiu;
import java.util.Scanner;

public class CadastroItens {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a quantidade de pessoas: ");
        int n = sc.nextInt();
        sc.nextLine(); // Consumir o '\n' restante

        String[] nomes = new String[n];
        String[] apelido = new String[n];


        for (int i = 0; i < n; i++) {
            System.out.print("Digite o nome da pessoa " + (i + 1) + ": ");
            nomes[i] = sc.nextLine();
            System.out.print("Digite o apelido da pessoa " + (i + 1) + ": ");
            apelido[i] = sc.nextLine();
        }

        System.out.println("\nCadastro concluído. Pessoas cadastradas:");
        for (int i = 0; i < n; i++) {
            System.out.println("Pessoa " + (i + 1) + ": " + nomes[i] + "e apelido:" + apelido[i]);
        }

        sc.close();
    }
}