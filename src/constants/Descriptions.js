const intro = `	As Serwis to ponad 15-letnie doświadczenie w branży gazowych
urządzeń grzewczych. Oferujemy kompleksowe rozwiązania z
zakresu obsługi urządzeń grzewczych, które znajdują się w
Państwa domach/mieszkaniach. Zajmujemy się wykonywaniem
napraw gwarancyjnych, pogwarancyjnych oraz przeglądów
technicznych kotłów i term gazowych. Firma pomaga także w
doborze nowego urządzenia, uwzględniając założony przez
Państwa budżet , sprzedaży w atrakcyjnej cenie po montaż i
pierwsze uruchomienie. Zapraszamy do skorzystania z naszych
usług.`

const tabTitle1 =`konserwaje i przeglądy kotłów gazowych`;
const tabTitle2 =`montaż i instalacja urządzeń`;
const tabTitle3 =`automatyka kotłowni`;

const tabDescription1 = `Certyfikowane przeglądy przeglądy i serwis grawaranyjny i
pogwarancyjny wybranych marek`;

const tabDescription3 =`Kalibrowanie nastaw, konfiguracja parametrów, instalacja sterowników`;

const tabDescription2 =`Montaż kotłowni gazowych , pierwsze uruchomienie`;

const pricesIntroText =`Zapraszamy do zapoznania się z cennikiem najpularniejszych usług. Dla 
niewymienionych w cenniku usług i klientów instutucjonalnych możliwa jest wycena dopasowana do 
indywidualnych potrzeb.`;

const pricesBottomText =`Ceny usług nie zawierają części zamiennych i ew. materiałów 
eksploatacyjnych (np. uszczelek palnika). Usługa przeglądu technicznego z konserwacją 
i czyszczeniem dotyczy w pełni sprawnego kotła gazowego. Diagnoza awarii, naprawy i wymiany
 części są osobnymi usługami. Ceny za konserwacje i naprawy mają charakter orientacyjny i 
 mogą być wyższe w zależności od pory roku i stopnia zanieczyszczenia urządzenia. Cena brutto z 
 bezpłatnym dojazdem na terenie Wrocławia (poza do uzgodnienia). Do zlecenia są wydawane paragony 
 lub faktury VAT.`;

const priceList =[
	{
		name: 'Przegląd  i konserwacja kotła do 50 kW',
		price: `250 zł`,
	},
	{
		name: 'Analiza spalin',
		price: `150 zł`,
	},
	{
		name: 'Diagnoza i naprawa awarii lub cześci wymiennych',
		price: `300 zł`,
	},
	{
		name: 'Pierwsze uruchomienie urządzenia grzewczego',
		price: `200 zł`,
	},
    {
		name: 'Montaż urządzenia grzewczego',
		price: `350zł`,
	},
    {
		name: 'Wymiana urządzenia grzewczego( demontaz i montaż)',
		price: `600 zł`,
	},
    {
		name: 'Dojazd do klienta na terenie Krakowa',
		price: `50 zł`,
	},
    {
		name: 'Dojazd do klienta poza teren Krakowa',
		price: `80 zł / 25km`,
	},
    {
		name: 'Roboczogodzina ',
		price: `90zł`,
	},
    {
		name: 'Abonament serwisowy 24/h',
		price: `350 zł/mies`,
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
}