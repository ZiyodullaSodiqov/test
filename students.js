

const generateId = () => {
  return "GEO" +  Math.floor(1000 + Math.random() * 1000).toString();
};

const students = [
    {
      "id": generateId(),
      "name": "ABDULLAYEV AZAT JUMABEKOVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "AMANOV JAMSHID JAMOL O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "AXNAZAROVA SALTANAT BAXITBAYEVNA",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "AYTMURATOV SAPARGELDI SHINGIS O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "BAYMURATOV MELS KONISBAYEVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "BAYNAZAROV TOKTARBAY TURDÍBAEVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "DJUMANAZAROVA GULZIRA MAXSETBAYEVNA",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "GENJEBAEV ILHAMBAY JOLDASBAY O‘G‘LI‘",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "JOLDASBAYEV AYDOS MAQSETBAY O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "JOLDASBAYEV RAMAZAN KADIRIMBET O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "KALBAYEV ALLAYAR PUXARBAYEVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "KARATAYEVA SHAXIDA BAXITBAY QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "KOSHIMURATOV DAO‘RANBEK YESEMURAT O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "KUDAYBERGENOV MURATBAY KUANISHBAY O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "QALBAYEV YERSULTAN SHAKEN O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "RAXIMBAYEV QODIR DO‘SIMBAT O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "SAGIDULLAYEV ALISHER XIYALATDIN O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "SEYTPANOV IKRAMBEK AYMUXAMEDOVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "SHIRLIYEV YAGMURGELDI ASHIROVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "UMBETALIYEVA AZIZA SAG‘ATDIN QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "YELMURATOV BEKMURAT",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "YESHANOV TIMURJAN MAXSUTBAYEVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },

    // x

    {
      "id": generateId(),
      "name": "ABDAMBETOVA GULZAR ALLIYAR QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "AMANGELDIYEV ULAN BAUIRJAN O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "ARAZMURADOV MIRAT GAYIPOVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "BAYNIYAZOV RASHID MAJITOVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "BERDIMURATOV TIMUR KOSHMURAT O‘G‘LI‘",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "DAUYEKOV ISABEK BERDAXOVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {"id": generateId(),
      "name": "ESHMURODOVA SHAROFAT XOLMUROD QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "KALBAYEVA AMANGUL KUANISHBAYEVNA",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    }, 
    {"id": generateId(),
      "name": "KARIMOVA DILBAR XOJAMURATOVNA",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "KASHKINBAYEV SULTANBEK KUUANISHBAY O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "KOSHIYEVA ARAY ONGARBAY KIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "MADREIMOV DAULETBAY DARIBAYEVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "NIYETBAYEV HAYTBAY QUANISHBAY O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "NURATDINOVA NARGIZA NASRATDIN QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "OMIRBEKOV ISMAYIL AXMETOVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "QIRIQBAYEV XOJAXMET MAXSETBAYEVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "QOSBERGENOVA DINORA YUSUPBAY QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "ROZUKULOV RASUL ROZUMOVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "SARSENBAEV ALISHER JULDI‘ZBAY O‘G‘LI‘",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "SBANAZAROV DAVID SADATDIN O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "URAKBAYEVA NODIRA RIMBAYEVNA",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "USENBAYEV BAXTIYAR OSPAN O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "UTEGENOV SALAMAT MUNBAYEVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "XOJAMETOV JANIBEK AXMEDOVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "XOJAMURATOVA MUNISA MAXSUD QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "URAZALIYEVA SHAIRA ISLAMOVNA",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },

    // y

    {
      "id": generateId(),
      "name": "ABDULLAYEV ZAFARBEK HO‘SINBOY O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "AVAZOV ABDUHALIM SALIMJONOVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "BAZARBAYEVA KUMUSH IKRAMOVNA",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "DERYAYEVA OGULNUR SAPARGELDIYEVNA",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "DIYOROV DEHRUZ DAMIN O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "ESHIMOV ABDULAZIZ USMONOVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "ESHMATOV JASURBEK JAHONGIR O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "ESHNAZAROV SARDOR BAXTIYOR O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "G‘AFFAROVA SHAMSIRO‘Y MALIK QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "HAZRATOVA IRODAXON O‘KTAMJONOVNA",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "HUBBIMOV QUVONDIQ ABDUMAJID O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "ISKANDAROV AHMADJON RAHMATJON O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "ISKANDAROVA DILNURA KAYRAT QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "JUMABOYEV NE’MAT RAJABBOY O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "JUMABOYEVA SURAYYO ODIL QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "JUMANAZAROV SHOXRUX AMATJAN O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "KARIMXO‘JAYEV NODIRBEK ADASHXO‘JA O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "MATMURODOVA SOHIBA MAXMUD QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "MAXMANAZAROVA CHAROS ISOMIDDIN QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "NABATULLAYEV ILHOMBEK KAMALATDINOVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "NORBOYEV ODILJON RAXMONQUL O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "NURMATOVA OGULTAGAN MAXSATMUXAMMETOVNA",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "O‘KTAMBOYEVA CHAROS ISLOMBOY QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "O‘ROZBOYEVA KUMUSH SHUXRAT QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "ORUNBAYEVA ZAMIRA RAMATOVNA",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "PRIMBETOVA KAMILA JAMALATDIN QI‘ZI‘",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "QALANDAROVA RAYHON ERGASHBOY QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "QOZOQOV SULTONBEK JUMAMUROD O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "RAJAPBAYEV DILMURAT SHUXRAT O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "RAJAPBOYEV OG‘ABEK UMIDBEK-O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "RAMETOV NURSULTON SHERMAT O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "RAMONOV ELBEK XUSHNUT O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "SAPARMURATOV AZAMAT BAXTIYOR O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "SERIKBAYEVA BAXTIGUL AYTBAYEVNA",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "SHARIPBOYEVA ELINUR AXMEDOVNA",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "SHARIPBOYEVA ELINUR AXMEDOVNA",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "SUNNATOVA SHAHNOZA FARID QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "TO‘YEV SA’DULLO SUNNATULLO O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },

    // bbbb

    {
      "id": generateId(),
      "name": "ABDIMURATOV IZZET SEKSENBAY O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "ABDIMURATOV TURSÍNBAY AYBERGEN ULÍ",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "ABUTOV NURPOLAT MARAT O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "AUEZOV ALISHER KUDAYBERGEN ULÍ",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "DUYSENOVA TURDIGUL YESEMURAT QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "GENJEBAYEV RINAT MARAT O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "JAQSÍMURATOV ARMAN ONǴARBAY ULÍ",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "JIENBAEV KURBANBAY ZARIPBAEVICH",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "KANIYAZOVA SHAXSANEM JOLDASBAY QIZI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "KO‘SHEKBAEV ANVARBEK JAN‘ABAY O‘G‘LI‘",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "OMIRBAYEV BERDIYAR BAXTIYAR O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "OMIRZAKOV ABDISADIK QUATBAY O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "ORINBASAROV NURLAN KENESBAY O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "OSPANOVA MALIKA GULMURAT QÍZÍ",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "PIRNAZAROV ERNAZAR BIYNAZAR ULÍ",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "QANNAZAROV IKRAM YAQÍPBAY ULÍ",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "QDÍRBAEV MÍRZABAY JOLDASBAY ULÍ",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "QURBANIYAZOV MUSABEK BEKNIYAZ ULÍ",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "SARSENBAYEV ASADBEK BEKPOLAT O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "SHERIPBAYEV KURAL TEMIRBAY O‘G‘LI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "TANIRBERGENOV RUSLANBEK ALLABERDI ULÍ",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "TOREJANOV ASADBEK SANADIL ULI",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "TURDI‘BAEV KUWANI‘SHBAY TAXIR ULI‘",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "TURDI‘MURATOV QUWAT SHARAPATDIN ULI‘",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },
    {
      "id": generateId(),
      "name": "YULDASHOVA AYSANEM IMAMATDINOVNA",
      "university_name": "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI"
    },

]

export default students