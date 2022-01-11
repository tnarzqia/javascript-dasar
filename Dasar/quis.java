
public class quis
{
    public static void main (string[] args)
    {
        int[] array = {10, 19, 21, 7 15, 8, 3, 23, 50, 41};
        int jumlah = array.length;

        for(int i=0; i < (jumlah-1); i++)
        {
            for(int j = 0; j< (jumlah-i-1); i++)
            {
                if(array[j] < array[j+1])
                {
                    int swap = array[j];
                    array[j] = array[j+1];
                    array[j+1] =swapp;
                }
            }
        }
    }
}

