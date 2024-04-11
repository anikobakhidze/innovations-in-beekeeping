## ვებ გვერდზე წარმოდგენილია სასოფლო- სამეურნეო და კვების მრეწველობის საწარმოებში ინოვაციური ტექნოლოგიები


<img width="847" alt="innovations-beekeeping" src="https://github.com/anikobakhidze/TBC_x_USAID/assets/80447919/8123c1c4-7ae4-47a4-bd75-9c01f1168581">

პროექტი აწყობილია cra-ის მეშვეობით. ვებვერდი შეიცავს სტატიკურ ინფორმაციას. 

საიტის სანახავად ეწვიეთ ვებ-გვერდს [Visit the Demetra Innovations website](https://innovationsdemetra.netlify.app/)



## პროექტის სტრუქტურა

1. Public
 - **images** - სურათების საქაღალდე შეიცავს სურათებს, რომლებიც გამოყენებულია ჩვენს პროექტში
   
2. src
   -**components** - საქაღანდეში მოთავსებულია ყველა ის ფუნქციონალური კომპონენტი , რომელსაც ვიყენებთ ui -ს შესაქმნელად
   - **config** - კონფიგურაციის საქაღალდე 
       routes.js - შეიცავს მასივს, სადაც მოთავსებულია route-ის path და კომპონენტი - განსაზღვრავს  თითოეულ როუთზე რომელი კომპონენტიც უნდა დარენდერდეს. 
  - **hook** - custom hook
     useTitle- ქოსთუმ ჰუკი, რომ ყველა გვერდისთვის  სათაური დარენდერდეს.
  - **pages** - საქაღალდე, რომელიც შეიცავს ყველა ვებ-გვერდს      
  - **sharedCss** - წარმოადგენს სტილებს, რომლებიც განმეორებადია სხვადასხვა ელემენტებისთვის
  - **translation** - ვებგვერდის სხვადასხვა ენის სამართავად
    - en
       translation.json - შეიცავს ინფორმაციას ინგლისურ ენაზე
    - ka
       translation.json - შეიცავს ინფორმაციას ქართულ ენაზე
    - rus
       translation.json - შეიცავს ინფორმაციას რუსულ ენაზე
   - **App.css** -ლოადერის სტილი
   - **App.js** - კომპონენტი პასუხისმგებელია  React აპლიკაციის ძირითად განლაგებაზე, მათ შორის, სათაურის, ქვედა კოლონტიტულისა და გვერდების;
   - **AppRoutes.js** - ეს კომპონენტი დინამიურად აგენერირებს როუთებს როუთების მასივის მოწოდებულ მონაცემებზე დაყრდნობით, რაც საშუალებას იძლევა მოქნილი და მასშტაბური მიდგომა გქონდეთ მარშრუტიზაციის მართვაში  React აპლიკაციაში.
   - **i18n.js**   - set up, რომლის მეშვეობითაც მარტივად ხდება ინტერნაციონალიზაცია თქვენს React აპლიკაციაში, გადავთარმნით სხვადასხვა ენაზე ვებგვერდზე არსებულ ინფორმაციას  JSON ფაილებში თარგმანების მიწოდებით .
   - **index.js** -  ეს კოდი ახდენს  React აპლიკაციის ინიციალიზებას და დარენდერებას, აყენებს მარშრუტიზაციას React Router-ით და ინტერნაციონალიზაციას i18n-ით. ის ასახავს  მთავარ <App> კომპონენტს თქვენი HTML დოკუმენტის ძირეულ ელემენტში.
    
    

## პროექტის გაშვება

1. დაკლონეთ რეპოზიტორი გითჰაბ ბმულიდან
   https://github.com/anikobakhidze/innovations-in-beekeeping

ან თქვენს ტერმინალში პირდაპირ გაუშვით ბრძანება

git clone https://github.com/anikobakhidze/innovations-in-beekeeping

2. დაკლონილი პროექტი გახსენით VS კოდის ედიტორში

3. ტერმინალში გაუშვით ბრძანება npm i , რათა დაინსტალირდეს ყველა ის ბიბლიოთება, tool-ები რაც არსებობს package.json ფაილში

4. პროექტის ბრაუზერში გასახსნელად ტერმინალში გაუშვით ბრძანება npm start

5. ტერმინალში გამოჩნდება http://localhost:3000 მსგავსი ლოკალური მისამართი, დააჭირეთ მას და პროექტი გაიხსნება ბრაუზერში
