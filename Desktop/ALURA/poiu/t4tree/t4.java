package poiu.t4tree;
import java.util.Scanner;
public class t4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Digite o número para fazer a árvore: ");
        int n = sc.nextInt();
        sc.nextLine(); // Consumir o '\n' restante

        for (int i = 0; i <= n; i++) {           // Laço externo: controla as linhas da árvore
            for (int j = 0; j < i; j++) {        // Laço interno: controla quantos '*' vão em cada linha
                System.out.print("*");           // Imprime um '*' sem pular de linha
            }
            System.out.println();                // Pula para a próxima linha após terminar a linha atual
        }
    }
    
}
