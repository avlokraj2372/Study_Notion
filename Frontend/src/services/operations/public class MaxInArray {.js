public class MaxInArray {
    public static void main(String[] args) {
        int[] numbers = {23, 89, 15, 92, 34, 67};

        int max = numbers[0]; // Assume first element is the max

        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i]; // Update max if current element is greater
            }
        }

        System.out.println("Maximum number in the array is: " + max);
    }
}
