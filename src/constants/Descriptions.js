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

 const contactIntro=`Jesteśmy do Państwa dyspozycji od poniedziałku do piątku w godzinach od 8:00 do 16:00.
 Jeżeli nie uda się Państwu dodzwonić, można wysłąć do nas maila, postaramy się ospowiedziec w ciągu 24h. 
 W sytuacjach awaryjncyh można się z nami kontaktować poza godzinami naszej pracy`;
 const tel ="600 339 541";
 const mail = "as_serwis@as_serwis.pl";

 const aboutMaintenance=`Bezawaryjna praca dwufunkcyjnych kotłów gazowych, 
 czyli tych najpopularniejszych, to komfort i bezpieczeństwo dla domowników. 
 Nikt nie chciałby być w sytuacji braku ogrzewania lub braku ciepłej wody w 
 kranie - nawet jeden dzień. Jeszcze jesteśmy w stanie to przeboleć podczas pory 
 letniej, ale już inne pory roku w Polsce nie są tak ciepłe jak w Hiszpanii;) 
 Mimo wszystko część klientów zapomina, że to właśnie ich kocioł gazowy jest 
 odpowiedzialny za ciepłą wodę użytkową i centralne ogrzewanie w ich domu lub mieszkaniu. 
 W związku z tym trzeba o niego systematycznie dbać,
  bo jak mówi przysłowie: „jak dbasz tak masz”.`;

  const aboutInstallation=`Oferowana przez naszą firmę instalacja piecyka gazowego, kotła
   gazowego oraz instalacji grzewczych to usługi wykonywane przez specjalistów.
    Podczas pracy wykorzystujemy profesjonalny sprzęt, a dzięki doświadczeniu i 
	fachowej wiedzy naszych pracowników zagwarantować możemy bezpieczeństwo 
	użytkowania montowanych urządzeń. Podłączenie kotła gazowego należy do 
	skomplikowanych czynności ze względu na wiele układów elektronicznych. 
	Podobnie jak montaż piecyka gazowego zadanie to powinno więc być wykonywane
	 przez uprawnionych specjalistów. Skorzystanie z usług naszej firmy daje 
	 pewność, że instalacja funkcjonować będzie sprawnie, a piecyki i kotły 
	 zostaną zamontowane prawidłowo i zgodnie z wymogami producenta oraz
	  obowiązującymi przepisami bezpieczeństwa. Zapewnia to nie tylko jej 
	  pełną efektywność, ale również możliwość skorzystania z uprawnień 
	  gwarancyjnych, jeśli tylko zajdzie taka konieczność.`;

const aboutAuthomatics =`Dobre działanie nowoczesnego systemu centralnego 
ogrzewania to nie tylko sprawne uzyskiwanie dużej ilości ciepła z możliwie
 małej ilości opału, ale również duży komfort użytkowania wszystkich urządzeń.
  Właściwie dobrany do potrzeb domowników kocioł powinien zapewniać łatwą 
  obsługę oraz dawać duże możliwości wyboru ustawień parametrów swojej pracy. 
  Dzięki stosowaniu zaawansowanej automatyki kotłowni, dostarczanie ciepła 
  oraz przygotowywanie ciepłej wody użytkowej, może wymagać jedynie minimalnej 
  ilości uwagi ze strony użytkownika. Przyjrzyjmy się, jakie systemy mogą pomóc
   w wygodnej eksploatacji domowej kotłowni.`;

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
	contactIntro,
	tel,
	mail,
	aboutMaintenance,
	aboutInstallation,
	aboutAuthomatics
	

}