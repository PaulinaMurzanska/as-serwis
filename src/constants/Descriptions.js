const intro = `	As serwis to ponad 15-letnie doświadczenie w branży gazowych
urządzeń grzewczych. Oferujemy kompleksowe rozwiązania z
zakresu obsługi urządzeń grzewczych, które znajdują się w
Państwa domach/mieszkaniach. Zajmujemy się wykonywaniem
napraw gwarancyjnych, pogwarancyjnych oraz przeglądów
technicznych kotłów i term gazowych. Pomagamy również w
doborze nowego urządzenia, uwzględniając założony przez
Państwa budżet i montażu urządzenia. Zapewniamy również usługę
pierwszego uruchomienia.`

const tabTitle1 =`konserwaje i przeglądy kotłów gazowych`;
const tabTitle2 =`montaż i instalacja urządzeń`;
const tabTitle3 =`automatyka kotłowni`;

const tabDescription1 = `Certyfikowane przeglądy i serwis grawaranyjny i
pogwarancyjny wybranych marek`;

const tabDescription3 =`Kalibrowanie nastaw, konfiguracja parametrów, instalacja sterowników`;

const tabDescription2 =`Montaż piecyków gazowych , pierwsze uruchomienie`;

const pricesIntroText =`Zapraszamy do zapoznania się z cennikiem najpularniejszych usług. Dla 
niewymienionych w cenniku usług i klientów instytucjonalnych możliwa jest wycena dopasowana do 
indywidualnych potrzeb.`;

const pricesBottomText =`Ceny usług nie zawierają części zamiennych i ew. materiałów 
eksploatacyjnych (np. uszczelek palnika). Usługa przeglądu technicznego z konserwacją 
i czyszczeniem dotyczy w pełni sprawnego kotła gazowego. Diagnoza awarii, naprawy i wymiany
 części są osobnymi usługami. Ceny za konserwacje i naprawy mają charakter orientacyjny i 
 mogą się różnić od tych wymienionych w cenniku w zależności od pory roku i stopnia zanieczyszczenia urządzenia. Wystawiamy faktury VAT.`;

 const contactIntro=`Jesteśmy do Państwa dyspozycji od poniedziałku do piątku w godzinach od 8:00 do 16:00.
 Jeżeli nie uda się Państwu dodzwonić, można wysłać do nas e-mail. Postaramy się odpowiedzieć w ciągu 24h. 
 W sytuacjach awaryjncyh można się z nami kontaktować poza godzinami naszej pracy`;
 
 const tel ="600 339 541";
 const mail = "a.sawicz@interia.pl";

 const aboutMaintenance=`Bezawaryjna praca dwufunkcyjnych kotłów gazowych, 
 czyli tych najpopularniejszych, to podstawa komfortu i bezpieczeństwa dla domowników. 
 Każdy chciałby uniknąć sytuacji braku ogrzewania lub braku ciepłej wody w 
 kranie - szczególnie w okresie zimowym. Dlatego ważne jest, aby zadbać o stan techniczny 
 swojego kotła gazowego jeszcze przed nadejściem okresu grzewczego. Zachęcamy do wykonywania przeglądów technicznych w okresie letnim. 
 Nie tylko zapewnisz sobie gotowość na zbliżające się już jesienią niskie temperatury, ale również oczekiwanie na serwis będzie znacznie krótsze 
 z uwagi na większą liczbę wolnych terminów.
 Nie czekaj na awarię, zabezpiecz się przed nią!
`;

  const aboutInstallation=`Oferowana przez naszą firmę instalacje piecyków gazowych oraz urządzeń grzewczych
   to usługi wykonywane przez doświadczonych fachowców.
    Podczas pracy wykorzystujemy profesjonalny sprzęt, a dzięki doświadczeniu i 
	specjalistycznej wiedzy, możemy zagwarantować  bezpieczeństwo 
	użytkowania montowanych urządzeń. Podłączenie kotła gazowego i piecyków gazowych należą do 
	skomplikowanych czynności ze względu na złożoność układów elektronicznych w nich zawartych.
 Skorzystanie z usług naszej firmy daje 
	 pewność, że instalacja będzie funkcjonować prawidłowo i zgodnie z wymogami producenta oraz
	  obowiązującymi przepisami bezpieczeństwa.`;

const aboutAuthomatics =`Właściwie dobrany do potrzeb domowników kocioł powinien  być łatwy w obsłudze
 oraz dawać możliwość samodzielnego ustawiania parametrów jego pracy. Prawidłowe kalibrowanie ustawień,
  zapewnia nie tylko oszczędny, ale również wydajny sposób zapewnienia ciepła w domu. Dzięki nam dowiesz się, w 
  jaki sposób prawidłowo manewrować nastawami, tak aby zapewnić sobie ciepło nie nadwyrężając niepotrzebnie swojego portfela.
`;

const maintenanceId="maintenane";
const authomaticsId="authomatics";
const installationId="installation";




const priceList =[
	{
		name: 'Przegląd  i konserwacja kotła do 50 kW',
		price: `__ zł`,
	},
	{
		name: 'Analiza spalin',
		price: `__ zł`,
	},
	{
		name: 'Diagnoza i naprawa awarii lub cześci wymiennych',
		price: `__ zł`,
	},
	{
		name: 'Pierwsze uruchomienie urządzenia grzewczego',
		price:`__ zł`,
	},
    {
		name: 'Montaż urządzenia grzewczego',
		price: `__ zł`,
	},
    {
		name: 'Wymiana urządzenia grzewczego( demontaz i montaż)',
		price: `__ zł`,
	},
    {
		name: 'Dojazd do klienta na terenie Krakowa',
		price: `__ zł`,
	},
    {
		name: 'Dojazd do klienta poza teren Krakowa',
		price: `__ zł`,
	},
    {
		name: 'Roboczogodzina ',
		price: `__ zł`,
	},
    {
		name: 'Abonament serwisowy 24/h',
		price:  `__ zł`,
	},
];

export {
    intro,
    tabTitle1,
    tabTitle2,
    tabTitle3,
    tabDescription1,
    tabDescription2,
    tabDescription3,
    priceList,
    pricesIntroText,
    pricesBottomText,
	contactIntro,
	tel,
	mail,
	aboutMaintenance,
	aboutInstallation,
	aboutAuthomatics,
	maintenanceId,
	installationId,
	authomaticsId,
	
	

}