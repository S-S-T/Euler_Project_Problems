using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
namespace EulerLargestProdInSeries_Problem08
{
    class Program
    {
        static void Main(string[] args)
        {// Get sets of 13 into an List<var> that do not contain a "0"; convert to Int64 and find largest sum of the 13 ints per, largest sum should be largest product
            List<string> lstThirteens = new List<string>();
            List<string> lstNonZero13s = new List<string>();
            List<BigInteger> lstBIGs = new List<BigInteger>();
            string largeNum = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
            int pos1 = 0;
            while (pos1 < 988)
            {
                string str1 = largeNum.Substring(pos1, 13);
                lstThirteens.Add(str1);
                pos1++;
            }
            foreach (string item in lstThirteens)
            {// Remove any items containing 0
                if (!item.Contains("0"))
                {
                    lstNonZero13s.Add(item);  // This gets us strings of good ones
                }
            }
            foreach (string item in lstNonZero13s)
            {// Convert the non-zero items to integers and find largest one
                long lngITEM = Convert.ToInt64(item); // SUM:int result = item.ToString().Sum(c => c - '0');
                var result = item.ToCharArray().Aggregate(1, (results, next) => results * ((int)next - 48));
                BigInteger _funcBI = CalcProduct(lngITEM);
                lstBIGs.Add(_funcBI);
                lstBIGs.Sort();
            }
            int intCountOfAccents = lstBIGs.Count - 1;
            BigInteger biFinalANSWER = lstBIGs[intCountOfAccents];
            Console.Write(biFinalANSWER);
        }
        public static BigInteger CalcProduct(BigInteger num)
        {
            BigInteger length = num.ToString().Length;
            if (length == 1)
            {
                return num;
            }
            return (num % 10) * CalcProduct(num / 10);
        }
    }
}