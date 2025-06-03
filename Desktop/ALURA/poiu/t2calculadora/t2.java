package poiu.t2calculadora;

import java.util.Scanner;

public class t2 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        try {
            System.out.print("Digite o primeiro número: ");
            double num1 = sc.nextDouble();
            System.out.print("Digite o segundo número: ");
            double num2 = sc.nextDouble();
            sc.nextLine(); // Consumir o '\n' restante
            System.out.print("Digite a operação (+, -, *, /): ");
            String operacao = sc.nextLine();

            switch (operacao) {
                case "+":
                    System.out.println("Resultado: " + (num1 + num2));
                    break;
                case "-":
                    System.out.println("Resultado: " + (num1 - num2));
                    break;
                case "*":
                    System.out.println("Resultado: " + (num1 * num2));
                    break;
                case "/":
                    if (num2 != 0) {
                        System.out.println("Resultado: " + (num1 / num2));
                    } else {
                        System.out.println("Erro: Divisão por zero não é permitida.");
                    }
                    break;
                default:
                    System.out.println("Operação inválida. Por favor, use +, -, * ou /.");
            }
        } catch (Exception e) {
            System.out.println("Entrada inválida! Por favor, digite apenas números.");
        } finally {
            sc.close();
        }
    }
}
