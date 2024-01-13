function reversestring()
        {

            let str1 = document.getElementById("str1").value;

            let newString ="";

            for(let i = str1.length - 1; i >= 0; i--)
            {

                newString += str1[i];

            }

            document.getElementById("p1").innerHTML = `Reversed String: ${newString}`;


        }