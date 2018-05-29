using System;
using System.Collections.Generic;

namespace Euler1001stPrime
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> lstIDs = new List<int>();
            lstIDs.Add(2);
            var _startInt = 3;
            while (lstIDs.Count < 10001)
            {/* if (Math.Sqrt(_startInt))Step 1: Find a whole number nearly greater than the square root of A. K ¿ square root(A)  Step 2: Test whether A is divisible by any prime number less than K. If yes A is not a prime number.*/
               decimal intSqRt = Convert.ToInt64(Math.Sqrt(_startInt));               
               bool isDivisble = true;                
               {
                   foreach (int item in lstIDs)
                   {
                       if (_startInt % item != 0)
                       {
                           isDivisble = false;
                           continue;
                       }
                       isDivisble = true;
                       {
                           break;
                       }
                   }
                   if (!isDivisble)
                   {
                        lstIDs.Add(_startInt);
                   }
               }                                                      
               _startInt++;                
            }            
            Console.Write(Convert.ToInt64(lstIDs[lstIDs.Count - 1]));
            Console.ReadKey(true);
        }
        /*
            List<long> prime = new List<long>();
            long num = 2;
            prime.Add(num);
            while(prime.Count<=10001)
            {
                num++;
                bool valid = false;
                foreach(long n in prime)
                {
                    if (num % n > 0)
                        valid = true;
                    else
                    {
                        valid = false;
                        break;
                    }
                }
                if (valid)
                    prime.Add(num);
            }
            Console.WriteLine(prime[10000]);
         */
    }
}