export async function GET(request: Request) {
  const users = [
    {
      userId: 1,
      username: "Elwin92",
      city: "West Myriam",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/31.jpg",
      description:
        "Accommodo solio calco uxor.\nVulnero vesper claudeo alo amplitudo.\nCognatus trado thesaurus confido correptius combibo antea cogito cibus copiose.\nDeprimo fugit claro vinum.\nVelit optio quae caput dolores verumtamen.\nAdvenio tui cogo desparatus casus eligendi alius spargo timidus.\nMinima suasoria demens delectatio thorax vulgo.\nAmitto atrox corroboro comburo.\nAdicio vester tener vulgivagus coerceo.\nCensura villa bibo accommodo degenero bos cicuta laboriosam vomer.\nTepidus administratio decumbo caute sollicito allatus absum arca.\nTener super tonsor calculus amplexus ancilla apparatus.\nAltus coniecto considero.\nStella adfectus decimus caput una.\nAngelus cumque decumbo cuppedia credo.\nComa adduco teres dignissimos utrimque succurro ullus thesis.\nSpeciosus curia coniecto.\nConsequatur caute modi taceo voluptatum convoco a stillicidium.\nConsidero voluptates demens voluptas coruscus atqui trado.\nVilla commodo defluo denique acerbitas.\nDenego tracto arto.\nAnnus inventore caveo voluptates adhaero capio.\nVelociter amplus depereo subvenio aestivus contego custodia canto.\nTurpis cohaero ambulo.\nHarum peccatus desparatus aliqua virga avarus expedita ventosus patior tam.\nCertus subseco carus adduco territo admoneo timidus esse.\nSubito thesis subseco benigne tamquam.\nCaecus sonitus vester conor credo.\nConiuratio barba carmen consequuntur claustrum catena aliqua deporto.\nNihil ara uberrime quos speculum degero articulus.",
      title: "audentia",
      image: "https://loremflickr.com/640/480?lock=5648012929925120",
      date: 1671577415431,
      tags: ["drat", "intelligent"],
      category: "cats",
    },
    {
      userId: 2,
      username: "Isaac.Kassulke",
      city: "Weissnatburgh",
      avatar: "https://avatars.githubusercontent.com/u/40244459",
      description:
        "Supplanto tristis cohaero curto velociter delinquo tenetur testimonium terror.\nExcepturi maiores consectetur universe ventosus vitium atavus sumptus.\nCresco aveho tactus deorsum conatus odio statim avaritia decipio magnam.\nAdinventitias aeneus vulgivagus velit cognomen pectus.\nAegrus aeternus subiungo.\nSolus dignissimos vix trado vicissitudo tenuis derelinquo civitas.\nAegrotatio uberrime defessus.\nColor aeternus quam candidus ademptio facilis communis.\nSubvenio ago surculus.\nSpeciosus angelus vociferor adfectus hic bestia aufero peccatus timidus.\nCanonicus eveniet circumvenio sublime vos accusator delicate accusantium volup voluntarius.\nVeritas vesco decens adulatio termes corroboro suspendo in tempore.\nUniverse terebro ea celebrer demitto.\nDolores derideo verbum stultus complectus cetera tametsi.\nTergo vado arceo praesentium crastinus.\nAccommodo termes aliquam pariatur nam.\nArchitecto fuga ulterius collum curvo adsidue.\nAsporto eum sum substantia vilis sint aperte chirographum acceptus eveniet.\nEst desidero usque ambitus terminatio venustas patria concido antiquus.\nCaste tolero aliquam ubi velut.\nAttollo vulticulus ventito colo socius demens curvo.\nLaborum cubicularis subnecto corroboro aeternus vespillo.\nConfido vereor fuga aedificium crur deficio tepidus turba sint socius.\nTraho audeo cohors.\nVoluptates pecto repudiandae cenaculum termes antiquus vereor turba corona.\nUredo defero casus admoneo vestigium sortitus.\nDelicate coniecto canto addo iure aequitas sufficio alienus tredecim.\nVolaticus vaco coepi vito cariosus absorbeo veniam utrum vulgivagus vester.\nCotidie dolorem ventito.\nAperiam amiculum victoria modi cauda undique laboriosam acidus.",
      title: "vicinus",
      image: "https://loremflickr.com/640/480?lock=6790265517899776",
      date: 1678254675154,
      tags: [""],
      category: "cats",
    },
    {
      userId: 3,
      username: "Berta.Hirthe16",
      city: "South Samanta",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/993.jpg",
      description:
        "Aveho libero paulatim voluptate succurro quos iure amaritudo abstergo.\nTimidus patrocinor ulterius patria ciminatio aequus vilis tubineus.\nVilicus voluptatum solium arca teneo dolorem.\nTertius comprehendo circumvenio incidunt taedium.\nPlaceat sunt cicuta clarus.\nDeprimo consectetur peccatus architecto vulnero ultra bene.\nCupiditas vitium sed vilicus usus comburo stabilis.\nTamdiu victoria substantia tersus.\nBellicus caelestis vulnero.\nComedo arx desolo canonicus possimus corona censura terebro appositus desolo.\nAmet cognomen a.\nAcsi vulgaris turba depereo cohors suggero tergo.\nSummisse voluptatibus quas cum somniculosus decimus arbitro summa ea tenax.\nCapitulus votum tenuis vos vulgivagus tollo sapiente uterque sit officia.\nTerrito apostolus vinco texo speculum delinquo absens.\nIncidunt debeo adficio speculum clementia ad tracto eaque virtus.\nCubitum agnosco adstringo eius admoveo paens utrimque suscipit adstringo.\nConduco adaugeo vicinus textilis.\nTui delinquo vinitor spargo cursus vulgus.\nCognatus solio abstergo.\nTot versus rerum adamo adaugeo adopto aliquid.\nTheatrum cubicularis molestias solitudo titulus ademptio adsidue eum causa.\nNemo suus thema.\nTener vitae amissio.\nAdsidue tergum subito civitas coadunatio.\nCasso astrum subiungo spoliatio alter solium caste.\nSuspendo acidus toties.\nCeler praesentium toties angulus thymbra vix.\nAscisco tepidus curto comburo deduco.\nVir theatrum veniam arbustum succurro apto delibero sol synagoga aestas.",
      title: "tempore",
      image: "https://loremflickr.com/640/480?lock=5604019116441600",
      date: 1671939779238,
      tags: ["engender", "reconsider", "generously", "hm"],
      category: "cats",
    },
    {
      userId: 4,
      username: "Syble_Abernathy-Vandervort81",
      city: "Mabelhaven",
      avatar: "https://avatars.githubusercontent.com/u/92073481",
      description:
        "Commodo deficio ocer decerno.\nTer vitae charisma validus.\nMagni aedificium assentator comminor similique spectaculum.\nVitae tollo tondeo crux virgo tenuis curiositas vespillo assumenda trado.\nAdopto tamdiu vulnus dolorem solutio videlicet aspernatur.\nAdmitto stabilis versus vestigium sonitus suscipio acer tamquam.\nCasus adaugeo pax aspernatur aufero.\nVicinus barba cattus vox vaco appositus.\nAnimadverto decens consequatur tepesco artificiose.\nAntea tabgo conservo tabella molestias tener similique tutamen currus nobis.\nConor adaugeo color templum conor tego.\nVitae casus uterque vomer tepesco addo degusto defluo confugo.\nAbsorbeo communis absum averto conforto amissio.\nAbbas amicitia repellat tepidus vetus textus expedita.\nCubicularis corrigo texo consuasor vomica paens ter debitis valde.\nSordeo arx certus terror comprehendo cavus aegrotatio tripudio.\nDebilito textus antiquus voluptatem temeritas crepusculum calco.\nError amaritudo alienus cum conforto supellex suffoco delibero usus.\nCertus patrocinor bardus atque laboriosam cuius absconditus ara summa.\nSummopere tardus vilicus est molestiae aperte acer deinde iste tertius.\nTerra venia timor.\nAiunt denego tamisium dedico animi cogo crux quaerat magni.\nAmplitudo deludo bos aegre comparo advenio tabernus clementia.\nVictus speculum amo defero cado trepide.\nLaborum non cunae.\nConiuratio capillus aperte campana defaeco dolor.\nAdiuvo quisquam aiunt tot suasoria usus bis creber tergeo talis.\nDepraedor deputo brevis.\nApprobo velut cado thema pauper aegre.\nNesciunt desidero aggero deinde barba utrimque.",
      title: "certe",
      image: "https://picsum.photos/seed/7XgbCuBw/640/480",
      date: 1701257033616,
      tags: ["rudely", "when"],
      category: "buildings",
    },
    {
      userId: 5,
      username: "Saige56",
      city: "Marilieburgh",
      avatar: "https://avatars.githubusercontent.com/u/59147708",
      description:
        "Audax sed solutio conspergo ullam audio confido vulnero suffragium sonitus.\nConitor conventus volutabrum commodi virgo tibi adnuo clarus.\nDelibero error strenuus rem.\nCimentarius suffoco cunae assumenda ascit.\nSint deorsum verumtamen ipsam.\nUt somniculosus accusamus assentator thesaurus aperte defero vinco.\nVir thermae thalassinus surgo vulgivagus tunc suppono sufficio labore baiulus.\nCubicularis speculum utrimque sto beatae illo pectus denique corroboro tenus.\nSollers sulum circumvenio succurro inflammatio cito.\nDeripio comes theca atrox subito.\nVilicus hic cubicularis alii tabesco.\nTergeo carbo cursus non anser utrimque canto verumtamen volup reprehenderit.\nDecretum admoneo vespillo tempus.\nOcer tutis subvenio pectus adeptio astrum.\nAeger admiratio articulus anser canto.\nDepereo uxor minima sollers demum.\nSordeo deripio alius colligo artificiose vomer pariatur.\nBalbus templum aliquam cattus tamdiu tollo tenax urbs copiose triduana.\nArbor commemoro cum.\nCanis molestiae basium.\nCasso cibo absorbeo sperno vilitas blandior.\nCenaculum sopor utilis vulpes blandior facere iure velut curso.\nTextus contigo callide tempora.\nAtavus terror coma sapiente.\nCensura dedico comitatus depraedor adinventitias vitae comprehendo stipes.\nTerror sublime eos tunc.\nConor cibus illum placeat consequuntur auctor audentia.\nVinculum volaticus comparo vere advoco umerus.\nUrbs teres aptus beatae cimentarius.\nAit odio abeo.",
      title: "quasi",
      image: "https://picsum.photos/seed/YFSLoV/640/480",
      date: 1675242412543,
      tags: ["er", "geez"],
      category: "buildings",
    },
    {
      userId: 6,
      username: "Trace14",
      city: "Lake Tabithatown",
      avatar: "https://avatars.githubusercontent.com/u/43417932",
      description:
        "Artificiose ager confido ter degero patior modi colligo contabesco.\nCulpa tolero aliquid deludo caries advoco talis caelestis verbera.\nAstrum comptus harum causa crustulum utor considero auctus titulus.\nCrebro tumultus benevolentia synagoga denego modi titulus.\nAutem vester comminor.\nAb tertius vomica utrum suppono vesica.\nBlandior commodo impedit bellum cometes.\nColo adhuc censura.\nAro cur accusamus talus spargo.\nVolo audio sapiente.\nBellum sed venustas curvo vita quo cribro ab.\nQuasi tempore argumentum defessus deprecator.\nDegero verecundia conor quos vix cumque xiphias utrimque.\nDefendo territo repudiandae conatus termes natus arca audeo centum.\nStipes dens vaco admiratio statua stella.\nVilitas verumtamen arma canto deludo.\nAmo sophismata depulso quae repudiandae tempore cubicularis tergeo sursum.\nQuis tutamen cribro deripio bestia esse commemoro universe depraedor.\nVoluntarius abbas amplitudo virgo super textor viridis.\nAudentia alius comedo combibo cedo templum velut abbas dens.\nCoepi demitto curatio appositus aperiam tenuis ab vorago eaque ceno.\nDelibero desparatus commodi audax suus.\nAvarus ad crux temeritas.\nBlandior consectetur claro placeat suasoria.\nTraho anser peccatus aestus conculco decor deserunt.\nEx artificiose admiratio vulpes.\nDepulso certus succurro.\nCiminatio uterque solio.\nCuppedia virtus sonitus.\nDefessus civitas canis temeritas comminor confugo bestia facilis.",
      title: "antiquus",
      image: "https://picsum.photos/seed/CZsPu/640/480",
      date: 1688200612628,
      tags: ["shipper", "truthfully"],
      category: "rest",
    },
    {
      userId: 7,
      username: "Carter7",
      city: "West Nakiaberg",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1153.jpg",
      description:
        "Pariatur admoveo conturbo arma ipsa admoveo.\nTemeritas caput temeritas armarium venustas conscendo.\nVenio cilicium abbas volubilis thorax nulla acervus.\nDecretum accusamus deleniti cognomen maiores conculco aedificium.\nDedico crastinus corrumpo vulgus utrum crur saepe.\nCariosus ut tametsi valens summa tamdiu atavus.\nAggero vulgo itaque.\nSit avarus corroboro aestus perspiciatis sumptus bellicus valens.\nCerte absens sequi totidem.\nDerideo ipsum vergo earum.\nCubo deporto capto absens surgo acervus ipsam defaeco.\nDedecor adhuc capto.\nCrebro quibusdam creber amo aureus quas vestrum incidunt velum tardus.\nConventus caute corona magni cenaculum ver bonus.\nVelum accendo vae.\nAestas vulnero audacia conventus capio arceo cohaero.\nFugiat uredo antiquus.\nDecerno taceo turpis audentia arbitro.\nVenustas adeptio absens tener accendo ventus vado cunabula virgo stipes.\nAdfectus depromo deprecator vapulus voluptates.\nCuratio verus asper umerus capto consuasor.\nTriduana celo sponte cruciamentum animi claustrum dapifer amita.\nCattus infit terga tabella commemoro.\nConcido benigne contego synagoga tamisium tutis quidem coniuratio laboriosam trans.\nTotam substantia vivo aestivus argentum degero virtus vulgivagus.\nEt torqueo conforto concido varietas exercitationem una stillicidium curto.\nSollers timidus nesciunt clibanus vere textilis vorax.\nAeger defetiscor ulciscor cauda animi venustas omnis facere.\nSurgo depopulo tumultus arma spiritus sollicito usus ducimus degenero.\nMinima amoveo statua demens.",
      title: "celebrer",
      image: "https://picsum.photos/seed/l62fn/640/480",
      date: 1673895669274,
      tags: ["save", "however"],
      category: "rest",
    },
    {
      userId: 8,
      username: "Candace4",
      city: "Port Leopoldoborough",
      avatar: "https://avatars.githubusercontent.com/u/56804565",
      description:
        "Contra succedo adeo adopto adsidue turba neque amicitia volup verbera.\nAdamo timor solvo corporis ustilo uredo.\nDecretum magni deprecator vae ago apostolus carcer pecco mollitia.\nTermes talus strues veritas at vulnero vester adipiscor et comparo.\nCrebro vereor degero contabesco toties comburo thesis.\nCohors capio arcesso vigilo crebro suscipio venia ter numquam enim.\nAgo vulgaris ter coruscus.\nDemitto cetera aureus comprehendo balbus clamo decumbo decretum vilitas unus.\nArcesso artificiose sol odit spiritus adstringo aeneus.\nCuriositas sapiente calco.\nAdversus tyrannus totam.\nAliquid cunabula venustas.\nTergeo voveo depopulo delectatio succedo.\nAestus arceo angustus caveo caritas corrupti.\nCrepusculum cuppedia aspicio ascisco coaegresco cumque aranea tendo.\nVox attonbitus ante dedico caute vereor artificiose in.\nUrbs amicitia voluptate creta termes vulticulus casus.\nSuffragium congregatio corroboro voco bis adversus aggero tempora cuppedia certus.\nAspicio adicio crustulum quidem cupiditas armarium votum conduco tepidus.\nAllatus universe titulus sto turpis blanditiis.\nTripudio desipio celer trucido voluptatem certus stella trans.\nFugiat patior chirographum congregatio caelum acsi talis tardus.\nDamnatio benigne torqueo usque advenio cumque eos nihil expedita tracto.\nCensura alienus adicio vorago officiis barba curia artificiose abundans.\nTener socius tener suffragium rerum assentator harum amor sol.\nSuccurro timor sollicito strues ter voluptate vesper canto.\nDelinquo vaco vix ad cedo.\nCrux amissio cursus veniam certus commodi capto decet maxime caterva.\nSono distinctio laborum aestivus attollo argentum sollers peccatus accusator.\nSumma cras tutamen bibo voluptas cogito.",
      title: "absum",
      image: "https://loremflickr.com/640/480?lock=4431378735169536",
      date: 1684864001257,
      tags: [""],
      category: "cats",
    },
    {
      userId: 9,
      username: "Ida.Funk",
      city: "Whitefort",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/700.jpg",
      description:
        "Amo succedo adopto repellendus adficio aut corroboro tamisium comminor timor.\nFugit cubicularis atavus allatus amoveo coma.\nCado corpus assentator.\nAdmoneo stillicidium animi decens cunabula.\nCaelestis cedo caelum auctor tremo studio campana crux usque.\nFacilis cimentarius nemo vergo vinculum audax distinctio.\nTaedium aureus aduro atque calcar.\nBis cunctatio dens inventore utroque aro appello aeternus vomito advoco.\nSpiritus similique taceo aranea statim color.\nCiminatio vereor clibanus tenetur solum arto compello.\nCimentarius censura sum caterva aggredior atqui statim sumo pecus.\nSumo fuga cribro clamo certe.\nSumma bis sto cultura.\nLaboriosam suffoco conforto aedificium barba dolor coma tergeo.\nAiunt audax calamitas volutabrum.\nAdaugeo tantillus culpo tergiversatio suadeo clarus suscipio xiphias.\nAmiculum aeneus solium adimpleo tristis tergiversatio caelum amicitia sed communis.\nDicta magnam demens vesper sollicito fuga ipsa.\nAlius cado fugiat abduco textilis sumo comminor tot.\nBlanditiis utrimque vesica.\nTersus acidus beatae ubi templum crastinus.\nCeno nesciunt aequus attollo stabilis arma ubi.\nTaceo vespillo taedium tabula delectus.\nAvarus altus iste averto vociferor deficio decimus viriliter.\nConicio calculus cognomen clam sufficio.\nNemo quod congregatio voro asper vitiosus torrens.\nSupra sono triumphus error.\nAer sophismata tamisium angustus.\nUtor adhaero tabesco vito cinis nobis temperantia.\nVoro velum adulescens catena crepusculum vapulus paulatim cruentus comburo communis.",
      title: "comburo",
      image: "https://loremflickr.com/640/480?lock=118068560789504",
      date: 1676863969557,
      tags: ["barring", "remarkable", "tutu", "into"],
      category: "cats",
    },
  ];

  const jsonData = JSON.stringify(users);

  return new Response(jsonData, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
