using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;

namespace EulerPalindromes
{
    class Program
    {
        static int Main(string[] args)

        // THIS ONE IS ALL-GOOD
        //{// run a loop that multiplies 3-digit numbers (they can be different) and results in a palindrome sum. 
        //    // store the palindromes in a alst and at the end console.write the largest one.
        //    // the sequence of multipliers should be 100 * 100; 100 * 101, 100 * 102.... 100 * 999.  Then 101 * 100, 101 * 101, 101 * 102... 101 * 999.
        //    // as you go, check the result to see is both the first and last digits are the same, then the first and second vs the last and second to last are the same, etc.
        //    // **** BUT SINCE WE WANT THE LARGEST.. START AT THE LARGEST TO MINIMIZE ITERATIONS
        //    ArrayList alstPals = new ArrayList();
        //    int _intStart = 100;
        //    int _intEnd = 100;
        //    int sum = 0;
        //    string strSum = "";
        //    int _intLIMIT = 1000;
        //    do
        //    {// increment LAST
        //        do
        //        {// increment FIRST
        //            // go thru incrementally and test if the value is div by 3 or 5, if it is write it to the alst
        //            sum = _intStart * _intEnd;       // multiply current loop items
        //            strSum = Convert.ToString(sum);  // Converr sum to string
        //            string strSumLast = strSum.Last().ToString();
        //            string strSumFirst = strSum.First().ToString();
        //            if (strSumFirst == strSumLast)
        //            {// if len of strSum is 5 run a test for the middle three
        //                if (strSum.Length == 5)
        //                {
        //                    string strMidSection = "";
        //                    strMidSection = strSum.Substring(1, 3);
        //                    string strMidFirst = strMidSection.First().ToString();
        //                    string strMidLast = strMidSection.Last().ToString();

        //                    if (strMidFirst == strMidLast)
        //                    {
        //                        alstPals.Add(sum);
        //                        sum = 0;
        //                        strMidFirst = "";
        //                        strMidLast = "";
        //                    }
        //                }
        //                if (strSum.Length == 6)
        //                {// SIX
        //                    string strMidSection = "";
        //                    strMidSection = strSum.Substring(1, 4);
        //                    string strMidFirst = strMidSection.First().ToString();
        //                    string strMidLast = strMidSection.Last().ToString();

        //                    if (strMidFirst == strMidLast)
        //                    {// This means another step to go thru
        //                        string strInnerSection = "";
        //                        strInnerSection = strMidSection.Substring(1, 2);
        //                        string strInnerFirst = strInnerSection.First().ToString();
        //                        string strInnerLast = strInnerSection.Last().ToString();
        //                        if (strInnerFirst == strInnerLast)
        //                        {// This means Palindrome
        //                            alstPals.Add(sum);
        //                            sum = 0;
        //                            strMidFirst = "";
        //                            strMidLast = "";
        //                        }
        //                    }
        //                }
        //            }
        //            _intStart++;
        //        } while (_intStart < _intLIMIT);
        //        _intEnd++;
        //        _intStart = 100;
        //    } while (_intEnd < _intLIMIT);                        
        //    alstPals.Sort();
        //    // last item in arraylist
        //    int _largestItem = alstPals.Count;
        //    _largestItem = _largestItem - 1;
        //    _largestItem = Convert.ToInt32(alstPals[_largestItem].ToString());
        //    Console.Write(_largestItem);
        //    return sum;
        //}      

        {// run a loop that multiplies 3-digit numbers (they can be different) and results in a palindrome sum. 
            // store the palindromes in a alst and at the end console.write the largest one.
            // the sequence of multipliers should be 100 * 100; 100 * 101, 100 * 102.... 100 * 999.  Then 101 * 100, 101 * 101, 101 * 102... 101 * 999.
            // as you go, check the result to see is both the first and last digits are the same, then the first and second vs the last and second to last are the same, etc.
            // **** BUT SINCE WE WANT THE LARGEST.. START AT THE LARGEST TO MINIMIZE ITERATIONS
            ArrayList alstPals = new ArrayList();
            int _intStart = 999;
            int _intEnd = 999;
            int sum = 0;
            string strSum = "";
            int _intLIMIT = 900;
            do
            {// increment LAST
                do
                {// increment FIRST
                    // go thru incrementally and test if the value is div by 3 or 5, if it is write it to the alst
                    sum = _intStart * _intEnd;       // multiply current loop items
                    strSum = Convert.ToString(sum);  // Converr sum to string
                    string strSumLast = strSum.Last().ToString();
                    string strSumFirst = strSum.First().ToString();
                    if (strSumFirst == strSumLast)
                    {// if len of strSum is 5 run a test for the middle three
                        if (strSum.Length == 5)
                        {
                            string strMidSection = "";
                            strMidSection = strSum.Substring(1, 3);
                            string strMidFirst = strMidSection.First().ToString();
                            string strMidLast = strMidSection.Last().ToString();

                            if (strMidFirst == strMidLast)
                            {
                                alstPals.Add(sum);
                                sum = 0;
                                strMidFirst = "";
                                strMidLast = "";
                                break;
                            }
                        }
                        if (strSum.Length == 6)
                        {// SIX
                            string strMidSection = "";
                            strMidSection = strSum.Substring(1, 4);
                            string strMidFirst = strMidSection.First().ToString();
                            string strMidLast = strMidSection.Last().ToString();

                            if (strMidFirst == strMidLast)
                            {// This means another step to go thru
                                string strInnerSection = "";
                                strInnerSection = strMidSection.Substring(1, 2);
                                string strInnerFirst = strInnerSection.First().ToString();
                                string strInnerLast = strInnerSection.Last().ToString();
                                if (strInnerFirst == strInnerLast)  
                                {// This means Palindrome
                                    alstPals.Add(sum);
                                    sum = 0;
                                    strMidFirst = "";
                                    strMidLast = "";
                                    if (alstPals.Count > 0)
                                    {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    _intStart--;
                } while (_intStart > _intLIMIT);
                _intEnd--;
                _intStart = 999;
            } while (_intEnd > _intLIMIT);
            alstPals.Sort();
            // last item in arraylist
            int _largestItem = alstPals.Count;
            _largestItem = _largestItem - 1;
            _largestItem = Convert.ToInt32(alstPals[_largestItem].ToString());
            Console.Write(_largestItem);
            return sum;
        }
    }
}

