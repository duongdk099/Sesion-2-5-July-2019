// calculate BMI
alert(" This is a program that can calculate your BMI and let you know were ur health good or bad !! ");
const weight=prompt(" Enter your weight , plz in kg ");
const height=prompt(" Enter your height ,plz in m ");

let BMI = weight / (height * height);
if (BMI <16  )
{
    alert("Severely underweight");
}
else if (BMI <18.5)
{
    alert(" Underweight ");
}
else if (BMI <25)
{
    alert("Normal ");
}
else if (BMI <30)
{
    alert("Overweight ");
}
else if (BMI > 30 )
{
    alert("Obese ");
}

