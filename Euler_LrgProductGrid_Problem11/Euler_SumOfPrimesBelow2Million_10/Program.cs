using System;
using System.Collections.Generic;
// EULER #10: The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below two million. 
namespace Euler_SumOfPrimesBelow2Million_10
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> lstIDs = new List<int>();
            lstIDs.Add(2);
            var _startInt = 3;
            long lngSUM = 2;
            while (_startInt <= 10)
            {
                decimal intSqRt = Convert.ToInt64(Math.Sqrt(_startInt));
                bool isDivisble = true;
                {
                    foreach (int item in lstIDs)
                    {
                        if (_startInt % item != 0) // if startInt is NOT evenly disible by item set bool to false and movenext, else set bool to true.
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
                        lngSUM = lngSUM + _startInt; // 142913828922
                        lstIDs.Add(_startInt);
                    }
                }
                _startInt++;
            }
            Console.Write(lngSUM); Console.ReadKey(true);
        }
    }
}