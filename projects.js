// ===== FOR THE RIGHT SIDE CATEGORY DATA DISPLAY =====
function showInfo(item) {
  const infoBox = document.getElementById('category-info');

  // Clear existing content
  infoBox.innerHTML = '';

  // Array for entries
  let entries = [];

  // Caritas Sri Lanka Youth Program entries
  if(item.innerText.includes('Caritas Sri Lanka Youth Program')) {
    entries = [
      {
        date: 'Tuesday, 08 July 2025',
        org: 'Caritas Sri Lanka',
        topic: 'Empowered in Christ: Ecumenical Youth Programme Unites Christian Youth Across Sri Lanka',
        image: 'images/IMG-20250624-WA0088 (1).jpg',
        video: '', 
        description: 'From June 20th to 21st, 2025, the peaceful surroundings of Arunodaya Retreat Centre in Athurugiriya came alive with the vibrant spirit of youth, faith, and unity as 68 young participants from across Sri Lanka gathered for the Ecumenical Youth Programme. This transformative two-day initiative was jointly organized by Caritas Sri Lanka – SEDEC, the National…',
        category: '<span>Caritas Sri Lanka Youth Program</span><span>Sustainable Peace & Justice (SP&J)</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 06 October 2020',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Youth programme',
        image: 'images/DSC_8321-768x512.jpg', 
        video: 'https://www.youtube.com/embed/your_youtube_id', 
        description: 'Some highlights of the past youth programme',
        category: 'Caritas Sri Lanka Youth Program',
        readMoreLink: '#'
      }
    ];
  } 
  // Community Empowerment & Safe Migration entries
  else if(item.innerText.includes('Community Empowerment & Safe Migration')) {

     // ✅ Intro Paragraph FIRST
  const introText = `
    <p class="category-intro">
      Community Empowerment & Safe Migration (CESM) of Caritas Sri Lanka implements
      programmes and projects related mainly on education, community development and
      empowerment, livelihood support, safe labour migration, water and sanitation etc.
      In addition, the Unit primarily takes up concerns and initiatives organized under
      the Dicastery for Promoting Integral Human Development founded by the Holy Father,
      Pope Francis.
    </p>
  `;
 infoBox.innerHTML = introText; // <<< This makes it visible
 
    entries = [
      {
        date: 'Thursday, 10 April 2025',
        org: 'Caritas Sri Lanka',
        topic: 'Strengthening Bonds for Sustainable Change: Partner Visit by Irasil Foundation',
        image: 'images/WhatsApp-Image-2025-03-09-at-17.13.55-768x576.jpeg',
        video: '', 
        description: 'Caritas Sri Lanka had the privilege of hosting Mr. Gerard Chitty and Mrs. Shivanthi Chitty, representatives of the Irasil Foundation, from February 20th to 25th, 2025. This partner visit took place across several key project locations supported by the Irasil Foundation, including Caritas Badulla, CODESEP – Galle, Caritas Kurunegala, Caritas Anuradhapura, Don Bosco School Mannar,…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 10 April 2025',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Korea Delegation Visits Sri Lanka: Strengthening Partnerships and Evaluating Community Projects',
        image: 'images/IMG_0834-768x512.jpg',
        video: '', 
        description: 'A delegation from Caritas Korea, led by Executive Director Fr. Francis and Program Coordinator Ms. Agnes, recently concluded a four-day visit to Sri Lanka to evaluate ongoing projects and strengthen partnerships with Caritas Sri Lanka. The visit, which took place from March 26 to 29, 2025, included meetings with all 13 diocesan partners and field…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Monday, 06 May 2024',
        org: 'Caritas Sri Lanka',
        topic: 'Celebrating Culture and Unity: Caritas Sri Lanka’s Sinhala and Tamil New Year Festival 2024',
        image: 'images/IMG_0074-768x512.jpg',
        video: '', 
        description: 'On April 29, 2024, the Caritas Sri Lanka Welfare Society organized the Awrudu festival for all staff members, an annual event that brings together the Sinhala and Tamil New Year with enthusiasm. This year’s celebration was marked by a series of heartfelt and culturally rich activities that showcased the traditions of Sri Lanka’s diverse communities.…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Monday, 06 May 2024',
        org: 'Caritas Sri Lanka',
        topic: 'Celebrating Culture and Unity: Caritas Sri Lanka’s Sinhala and Tamil New Year Festival 2024',
        image: 'images/IMG_0074-768x512.jpg',
        video: '', 
        description: 'On April 29, 2024, the Caritas Sri Lanka Welfare Society organized the Awrudu festival for all staff members, an annual event that brings together the Sinhala and Tamil New Year with enthusiasm. This year’s celebration was marked by a series of heartfelt and culturally rich activities that showcased the traditions of Sri Lanka’s diverse communities.…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 22 November 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Harmony Unveiled: Nurturing Tomorrow’s Peacemakers- A Youth Workshop on Peace-Building and Gender Equality',
        image: 'images/IMG_4959-768x576.jpg',
        video: '', 
        description: 'In a world hungry for change and eager for progress, Caritas Sri Lanka, fueled by the generous support of AGIAMONDO, organized a transformative youth workshop on peace-building and gender equality on November 16th and 17th, 2023 at the Caritas Chilaw Centre. Caritas Sri Lanka welcomed 9 Diocesan Centres (DCs) to participate, marking a pivotal moment…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 07 November 2023',
        org: 'Caritas Sri Lanka',
        topic: '“Empowering Education: Shanjika Kandeepan’s Inspiring Journey with EHED Caritas”',
        image: 'images/Presentation1.png',
        video: '', 
        description: '“My name is Shanjika Kandeepan, and I live in the village called Selvanayagapuram. My life took a challenging turn when my father was abducted in 2008, leaving my twin sister and me under the care of our widowed grandmother, Mrs Maheswary Murugaiya. However, our situation shifted in 2019 when EHED Caritas, Trincomalee, stepped in to…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 20 June 2023',
        org: 'Caritas Sri Lanka',
        topic: 'A priest, a social activist of par excellence',
        image: 'images/Scan-10041-768x535.jpg',
        video: '', 
        description: 'Rev. Fr. Oswald B Firth, OMI, was a formator, academic, administrator, peacebuilder, and activist and had been the former director of Caritas Sri Lanka SEDEC (1990-1995) during a period of major political and economic upheaval in the country with pressing social issues, particularly of development gap across regions and breeding inequality at the face of…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 24 March 2022',
        org: 'Caritas Sri Lanka',
        topic: 'Mitigation of Thalassemia through Awareness and Empowerment',
        image: 'images/Anu-School-768x432.jpg',
        video: '', 
        description: '“Thalassemia” is a genetically inherited, non-curable but easily preventable disease in which normal hemoglobin level in a patient is partially or completely surpass and necessitates blood transfusion approximately at month intervals. The safest approach to prevent the birth of a Thalassemia child is for the carrier of the gene to marry a non-carrier. For this…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 10 March 2022',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Sri Lanka – SEDEC Celebrates International Women’s Day 2022 Empowering the women of the world',
        image: 'images/237354385_888539101746908_106192891424554883_n-768x1147.jpg',
        video: '', 
        description: 'Every year, International Women’s Day is celebrated on March 8 with great enthusiasm across the world to honour and treasure the women in one’s daily lives and womanhood in general. This year the theme for International Women’s day for 2022 was ‘ Gender equality today for a sustainable tomorrow.” Caritas Sri Lanka –SEDEC celebrated International…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 29 September 2021',
        org: 'Caritas Sri Lanka',
        topic: 'Social protection of the marginalized poor in Sri Lanka and the SDG and achievement',
        image: 'images/IMG_0013-768x512.jpg',
        video: '', 
        description: 'Social protection in Sri Lanka is a vast subject and it needs to be dealt with statistics and many aspects in detail to have a very clear picture of the subject. Since this cannot be dealt in 05 minutes I wanted to limit myself to same reflections which are common to Sri Lank and the…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Monday, 21 June 2021',
        org: 'Caritas Sri Lanka',
        topic: 'Virtual Study Sessions on Present Political and Legal Contexts of Sri Lanka',
        image: 'images/csl-768x576.png',
        video: '', 
        description: 'In view of the next Strategic Plan of Caritas Sri Lanka – SEDEC, two contextual analysis virtual study sessions were organized recently. On 9th of June 2021, the discussion titled, “ An Analysis of the Present Socio Political Context of Sri Lanka” was organized and the guest speaker was Emeritus Professor Jayadeva Uyangoda from the…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Friday, 09 April 2021',
        org: 'Caritas Sri Lanka',
        topic: 'Formation of Federation in Mannar & Vavuniya under Civic Dialogue Project',
        image: 'images/1617956084317-768x575.jpg',
        video: '', 
        description: 'A 2 day Knowledge Enhancement Workshop on formation of Federation was conducted to the 40 CBO leaders of the ‘Civic Dialogue Special Project for Mannar’ by Caritas Valvuthayam in close collaboration with Caritas Sri Lanka – SEDEC on 24th& 25th of March 2021, abiding by the COVID – 19 rules & regulations. The Civic Dialogue…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 16 February 2021',
        org: 'Caritas Sri Lanka',
        topic: 'A story of Fight against Poverty by CBO members in Sri Lanka, Maduragama,',
        image: 'images/IMG_0518-768x512.jpg',
        video: '', 
        description: 'Under the Civic Dialogue and Cross Community Activities project, funded by Caritas Korea, a barren paddy field for 10 years in Maduragama in the district of Puttalam was harvested by the CBO members of the project on 14th of February 2020. The initiative comes as an solution to the poverty widespread in the region. Caritas…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 09 February 2021',
        org: 'Caritas Sri Lanka',
        topic: 'Webinar on Issues related Human Trafficking and Labour Migration in the Context of COVID 19 in Sri Lanka',
        image: 'images/Webinar-Invitation-Banner-Templates-creative-768x432.png',
        video: '', 
        description: 'Caritas Sri Lanka – SEDEC together with the Catholic National Commission for the Pastoral Care of Migrants, Talithakum Sri Lanka have organized a webinar titled, “Issues related Human Trafficking and Labour Migration in the Context of COVID 19 in Sri Lanka” on 8th of February 2021. The above programme has been organized in line with…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 12 January 2021',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Sri Lanka and Kansarmen SL Foundation signed an MOU on water and sanitation.',
        image: 'images/IMG_0018-768x512.jpg',
        video: '', 
        description: 'Caritas Sri Lanka and Kansarmen SL Foundation signed an MOU today to implement project related to water and sanitation. Representing Caritas Sri Lanka, Fr. Mahendra Gunatilleke , National Director and Mr.Chaminda Fernando Pulle, Director, Kansarmen SL Foundation signed the MOU. Under this initiative, both the organizations will work in partnership to implement projects in selected…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 25 August 2020',
        org: 'Caritas Sri Lanka',
        topic: 'Access to safe drinking water to Residents of Kudagama village, Anuradhapura District',
        image: 'images/Slide12.jpg',
        video: '', 
        description: 'Caritas Sri Lanka – SEDEC with support from the Rotary Club of Capital City, Colombo helped Caritas Anuradhapura to set up a Reverse Osmosis (RO) plant to provide safe drinking water to the residents of Kaluagala and Kudagama village in the Anuradhapura district. There are thousands of families in the North Central Province including Anuradhapura…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 17 September 2019',
        org: 'Caritas Sri Lanka',
        topic: 'Forming CBOs to Federation Level to Strengthen Civil Activity',
        image: 'images/IMG_0250-768x512.jpg',
        video: '', 
        description: 'Under the project titled, “Replacing the Experience of Integral Human Development – Civic Dialogue and Cross – Community Activities” funded by Caritas Korea, CBO leaders from 4 Dioceses namely, Anuradhapura, Badulla, Mannar and Vanni gathered in Colombo recently to discuss ways and means as to how they would form CBOs into district level federations. It…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 27 August 2019',
        org: 'Caritas Sri Lanka',
        topic: 'National Interfaith Forum and Exposure Visit',
        image: 'images/68481352_2425122420911248_4876668479635193856_n-768x542.jpg',
        video: '', 
        description: 'Cambodia National Inter-Faith Forum on Combating Human Trafficking and Ending Modern Slavery was organized for the third time on 14th August 2019 and was presided over by the Deputy Prime Minister of Cambodia, Minister of Interior and the Chairman of National Committee for Counter Trafficking (NCCT). This forum was initiated by Caritas Cambodia and religious…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 27 August 2019',
        org: 'Caritas Sri Lanka',
        topic: 'Centre for Disabled Initiating Fund Raising Plan',
        image: 'images/MANNAR.jpg',
        video: '', 
        description: 'Caritas Mannar – Valvudayam started the Centre For Disabled (CFD) a little over two decade ago to cater to the needs of the poor and marginalized people in the Diocese of Mannar on 31st January 1999 under the abled leadership of visionary priest,  Rev. Fr.S.Emmanuspillai  . The main objective of setting up this specialized centre…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 08 August 2019',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Sri Lanka – SEDEC Heartfelt Condolence',
        image: 'images/IMG_8582.jpg',
        video: '', 
        description: 'Rev. Sr. Mary Angela has worked at Caritas Sri Lanka-SEDEC from 1980s to 1995. She had been a wonderful character who had inspired many during her time at SEDEC. Especially her enthusiastic work forming the famous Women’s Desk at Caritas Sri Lanka-SEDEC made the organization a professional and a profound humanitarian organization in the Sri…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 23 July 2019',
        org: 'Caritas Sri Lanka',
        topic: 'Biannual Review meeting of Food security program',
        image: 'images/IMG_0108-768x512.jpg',
        video: '', 
        description: 'Caritas Sri Lanka – SEDEC carried out a Biannual Review meeting of Food Security program on 18th and 19th of July 2019 at the SEDEC Auditorium. “Addressing Causes for Poverty and Ensuring Food Security for Farming Communities”  is a Caritas Norway / NORAD funded agricultural supportive program which is being implemented through our Diocesan network,…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      //strat from bellow
      {
        date: 'Tuesday, 19 March 2019',
        org: 'Caritas Sri Lanka',
        topic: 'Data Analysis Workshop: Learning from the Experiences of Women Migrant Workers',
        image: 'images/IMG_7316.jpg',
        video: '', 
        description: 'The Global Alliance Against Traffic in Women (GAATW) in Bangkok, Thailand organized a workshop on Data Analysis and Learning from the Experiences of Women Migrant Workers in Kathmandu, Nepal. Three of the Caritas Sri Lanka officers, Mr.Theivendirarajah Kanagarantnam,, Senior Programme Manager, Mr. Samantha Pathirathana, Chairman, PASS Asia (Pvt) Ltd, Ms. Chathurani N. Hettiarachchi, Safe Labour…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 10 January 2018',
        org: 'Caritas Sri Lanka',
        topic: 'Motivational Programme for Aquinas Staff',
        image: 'images/IMG_0056-768x512.jpg',
        video: '', 
        description: 'Caritas Sri Lanka – SEDEC conducted a motivational programme for the staff of the Aquinas college of Higher Studies last week, on 5th January 2018 at the SEDEC Auditorium, in Colombo. A group of 74 lecturers took part in a half a day session which saw fruitful discussion and interactions. The team of well experienced senior staff, comprised…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 01 November 2017',
        org: 'Caritas Sri Lanka',
        topic: 'Safe Drinking Water To The Village Children',
        image: '',
        video: '', 
        description: 'My name is Perumal Shamila and I am 25 years old. I live in the Cullen Estate, Badulla. I am a pre-school teacher. I am also the secretary of the community based society named “Kalar Udeer”, which is under the GGH project (Green Gold Harvesters) implemented by the USCOD Caritas Badulla. Under the GGH project,…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      }
    ];
  } 
  // CSL EVENTS
  else if(item.innerText.includes('CSL EVENTS')) {
    entries = [
      {
        date: 'Wednesday, 09 July 2025',
        org: 'Caritas Sri Lanka',
        topic: 'A Grateful Farewell and a Warm Welcome: Caritas Sri Lanka Embraces New Leadership',
        image: 'images/WhatsApp-Image-2025-06-30-at-11.32.05-768x512.jpeg',
        video: '', 
        description: 'On the 27th of June 2025, the Caritas Sri Lanka-SEDEC organized a ceremonial event to honour the outgoing leadership and extend a warm welcome to the new Bishop Chairman of Caritas Sri Lanka. The day brought the Caritas family together to reflect on the legacy of its past leaders while embracing the vision and guidance…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 08 July 2025',
        org: 'Caritas Sri Lanka',
        topic: 'Blessing and Opening Ceremony of the New Caritas Sri Lanka Building: A Dream Fulfilled',
        image: 'images/IMG_0259-Copy-768x512.jpg',
        video: '', 
        description: 'On the 27th of June 2025 at 3.00 p.m., the premises of Caritas Sri Lanka – SEDEC became a place of joyful celebration as the blessing and opening ceremony of its New Buildings was held with much reverence and warmth. The event marked a significant milestone in the journey of Caritas Sri Lanka, as the…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 14 May 2025',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Sri Lanka Welcomes His Holiness Pope Leo XIV with Joyful Prayers',
        image: 'images/20250508T1415-POPE-ELECTED-PREVOST-1796669-768x1152.jpeg',
        video: '', 
        description: 'Caritas Sri Lanka extends its heartfelt congratulations and warmest blessings to His Holiness Pope Leo XIV (Cardinal Robert Prevost), the newly elected 267th Supreme Pontiff of the Holy Roman Catholic Church. This historic moment marks a new chapter for the universal Church, and we rejoice alongside the global Catholic community. We pray that the Holy…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 24 April 2025',
        org: 'Caritas Sri Lanka',
        topic: 'Rev. Fr. Luke Nelson, National Director of Caritas Sri Lanka, visited the Apostolic Nunciature in Colombo to pay his respects following the passing of His Holiness Pope Francis.',
        image: 'images/WhatsApp-Image-2025-02-10-at-11.14.07_669ae4cf-768x511.jpg',
        video: '', 
        description: 'Today, Rev. Fr. Luke Nelson, National Director of Caritas Sri Lanka, visited the Apostolic Nunciature in Colombo to pay his respects following the passing of His Holiness Pope Francis. During this solemn occasion, he met with the Apostolic Nuncio and offered heartfelt condolences on behalf of the entire Caritas Sri Lanka–SEDEC family. Fr. Luke also…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Friday, 21 March 2025',
        org: 'Caritas Sri Lanka',
        topic: '20 Years Since the 2004 Tsunami: A Journey of Strength and Hope',
        image: 'images/KLS4079-768x513.jpg',
        video: '', 
        description: 'On February 19, 2025, Caritas Sri Lanka – SEDEC held a special event at BMICH, Lotus Hall, Colombo, to mark 20 years since the devastating 2004 tsunami. The event brought together international partners, religious leaders, communities, and humanitarian workers to honor the lives lost, appreciate the strength of survivors, and reflect on the efforts to…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 04 March 2025',
        org: 'Caritas Sri Lanka',
        topic: 'Holy Eucharistic Celebration Marks the 20th Tsunami Remembrance',
        image: 'images/042-768x513.jpg',
        video: '', 
        description: 'On February 19, 2025, a solemn Holy Eucharistic Celebration was held at the Bandaranaike Memorial International Conference Hall (BMICH), Colombo, Sri Lanka to mark the 20th anniversary of the Tsunami that devastated some coastal areas of Sri Lanka in 2004. This significant event, held under the theme “Memories of an Empowering Journey of Resilience,” honoured…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
            //start from here
      {
        date: 'Wednesday, 26 February 2025',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Sri Lanka Partners’ Forum 2025: Strengthening Collaboration for a Just and Prosperous Future',
        image: 'images/IMG_0364-768x512.jpg',
        video: '', 
        description: 'Caritas Sri Lanka – SEDEC successfully hosted the Partners’ Forum 2025 on February 18, 2025, under the theme “Continuing the Journey towards Uplifting Sri Lanka.” The event brought together national and international partners, government representatives, experts, diocesan directors, coordinators and community leaders to discuss Sri Lanka’s pressing social and economic challenges and explore collaborative strategies…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      }
    ];
  } 
  // CSL PLANTATION PROGRAMME
  else if(item.innerText.includes('CSL PLANTATION PROGRAMME')) {
    entries = [
      {
        date: 'Tuesday, 08 July 2025',
        org: 'Caritas Sri Lanka',
        topic: 'Building Bridges: Bringing Plantation Youth Together for Peace and Leadership',
        image: 'images/WhatsApp-Image-2025-06-26-at-14.09.52-768x512.jpeg',
        video: '', 
        description: 'Caritas Sri Lanka, in collaboration with Caritas Ratnapura – Sethmini and with the generous support of AGIAMONDO, successfully conducted a two-day residential workshop titled “Building Bridges: Bringing Plantation Youth Together for Peace and Leadership” on the 24th and 25th of June 2025 at the Buluthota Retreat Centre. This workshop was specially designed for youth from…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      }
    ];
  } 
  // Disaster Risk Reduction Management (DRRM)
  else if(item.innerText.includes('Disaster Risk Reduction Management (DRRM)')) {
      // ✅ Intro Paragraph FIRST
  const introText = `
    <p class="category-intro">
      As a vital unit of Caritas Sri Lanka, Disaster Risk Reduction and Management (DRRM) unit support to address the needs of communities affected by manmade and natural disasters and improves the quality of life of marginalized and vulnerable communities irrespective of their ethnic or religion. Presently, DRRM is in forefront in providing temporary shelters and livelihood for war affected, resettled and Sri Lankan refugees returning from India.
    </p>
  `;
 infoBox.innerHTML = introText; // <<< This makes it visible

    entries = [
      {
        date: 'Monday, 18 November 2024',
        org: 'Caritas Sri Lanka',
        topic: 'Enhancing Thalassemia Care in Sri Lanka: Insights from the Exposure Visit to India',
        image: 'images/5-768x576.jpeg',
        video: '', 
        description: 'From November 1st to 5th, a national-level capacity-building program and exposure visit for ‘Mitigation of Thalassemia, caring for the neglected and the helpless’ programme officers was held in Chennai, India, funded by Misereor. The program brought together seven participants, including three staff members from the National Centre and four diocesan staff members from Badulla, Chilaw,…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 11 June 2024',
        org: 'Caritas Sri Lanka',
        topic: 'Commemoration of International Thalassemia Day 2024',
        image: 'images/88-768x576.jpg',
        video: '', 
        description: 'On the 8th of May, 2024, Caritas USCOD Badulla, supported by Misereor, hosted the Commemoration of International Thalassemia Day at the Riverside Hotel in Badulla. This event, held from 9:00 AM to 11:00 AM, brought together various stakeholders and beneficiaries to raise awareness about Thalassemia and support those affected by the condition. The event saw…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 27 March 2024',
        org: 'Caritas Sri Lanka',
        topic: 'Capacity Building Training Program on Disaster Risk Reduction and Mitigation Empowers Caritas Sri Lanka Staff',
        image: 'images/WhatsApp-Image-2024-03-27-at-10.42.03-768x576.jpeg',
        video: '', 
        description: 'On March 20th and 21st of 2024 Caritas Sri Lanka, in collaboration with the Disaster Risk Reduction and Mitigation (DRRM) unit, recently concluded a comprehensive training program aimed at enhancing the disaster preparedness and mitigation skills of its staff. Funded by Caritas Asia, the two-day training took place at the Caritas Sri Lanka Auditorium, providing…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 12 December 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Empowering Inclusivity: Caritas Sri Lanka’s Transformative Exposure Visit to Blue Rose Special School',
        image: 'images/flowers-276014_1280-768x488.jpg',
        video: '', 
        description: 'In a remarkable initiative aimed at ensuring the rights of children with disabilities and supporting their parents and volunteers, Caritas Sri Lanka (CSL) organized an exposure visit to the Blue Rose Special School and Training Centre in Kandy. This transformative experience unfolded on the 22nd and 23rd of November 2023, bringing together parents of children…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Friday, 08 December 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Empowering Estate Communities for a Brighter Future: A Transformative Gathering by Caritas Sri Lanka SEDEC',
        image: 'images/2023_11_15_14_47_IMG_6673-768x576.jpg',
        video: '', 
        description: 'In a profound demonstration of unity, Caritas Sri Lanka SEDEC organized a three-day event titled “Empowering Estate Communities for a Brighter Future.” This impactful gathering took place at the Samudi Conference Hall in Rathnapura from November 15th to 17th, 2023. Day One: Illuminating the Path Forward The first day set the tone with the ceremonial…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Friday, 20 October 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Strengthening Resilience: Caritas Sri Lanka’s Skill Development Training for Search and Rescue Operation and Disaster Preparedness',
        image: 'images/IMG_2841-min-768x512.jpg',
        video: '', 
        description: 'In a world marked by unpredictability, communities must be prepared for unexpected disasters. Caritas Sri Lanka National Centre, in collaboration with Caritas SED Galle, has taken a proactive step to enhance the resilience of individuals in Sri Lanka through skill development training in search and rescue operations and disaster preparedness. This remarkable training program under…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 21 September 2023',
        org: 'Caritas Sri Lanka',
        topic: 'AN AWARENESS SESSION ON DEBT RESTRUCTURING AND GOVERNANCE REFORMS IN SRI LANKA',
        image: 'images/MG_0349-768x512.jpg',
        video: '', 
        description: 'Presently Sri Lanka is undergoing multiple challenges due to the economic and political crises in the country. The improper governance reforms and obtaining of foreign loans during the past years, the Sri Lankan government is in its inability to repay the external debt, whose interest and repayment must be paid in foreign exchange. In the…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 09 May 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Be aware. Share. Care. Strengthening Education to bridge the Thalassemia care gap.',
        image: 'images/Thalassemia.-768x384.jpg',
        video: '', 
        description: 'In a touching and emotional event that celebrated the spirit of resilience and unity, the National Center Caritas Sri Lanka commemorated the International Thalassemia Day on the 08th of May 2023. This event served as a platform for raising awareness about Thalassemia, an inherited blood disorder, while also highlighting the importance of community support for…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 30 March 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Donations to School Dental Services',
        image: 'images/IMG_8372-768x512.jpg',
        video: '', 
        description: 'On the request made to Caritas Sri Lanka – SEDEC by His Eminence Cardinal Malcolm Ranjith, CSL-SEDEC donated dental material to be used in Colombo school dental services, and the Oral Health Units, through the Health Services in Colombo. Due to the scarcity of medicines in the country, this donation will help in the screening…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Monday, 13 February 2023',
        org: 'Caritas Sri Lanka',
        topic: 'EARTHQUAKE IN TURKEY AND SYRIA',
        image: 'images/banner-on-turkey-768x640.jpg',
        video: '', 
        description: 'We are deeply saddened to hear the news of the devastating earthquakes in both Turkey and Syria.We at Caritas Sri Lanka and all our Diocesan counterparts remember those who have died and have been affected by the disaster, in prayer.We pray that the people of Turkey and Syria remain united and strong in ardent hope,…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 29 November 2022',
        org: 'Caritas Sri Lanka',
        topic: 'HATTON NATIONAL BANK & CARITAS SRI LANKA – THE SEASON OF GIVING',
        image: 'images/WhatsApp-Image-2022-11-28-at-15.03.32-1-768x512.jpeg',
        video: '', 
        description: 'Hatton National Bank in collaboration with Caritas Sri Lanka launched the joint initiative “Season of Giving” donation campaign on the 25th of November 2022 at the CSL Auditorium in the presence of Rt. Rev. Dr. Maxwell Silva, the Vice Chairman of the National Commission for Justice, Peace and Human Development/Vice Chairman of Caritas Sri Lanka,…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 31 August 2022',
        org: 'Caritas Sri Lanka',
        topic: 'CSL Feeding Programme : ‘Alleviating hunger for the most vulnerable communities in this crisis situation in Sri Lanka’',
        image: 'images/WhatsApp-Image-2022-07-25-at-2.34.47-PM-768x576.jpeg',
        video: '', 
        description: '“Taking the five loaves and the two fish and looking up to heaven, He gave thanks and broke the loaves.”   Matthew 14:19. How great is the act of sharing a meal with the poor and marginalized! Jesus shared a meal with five thousand people who followed him and in this miraculous act, we must seek…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 30 June 2021',
        org: 'Caritas Sri Lanka',
        topic: 'In solidarity with the Plantation Community……',
        image: 'images/IMG_0357-768x512.jpg',
        video: '', 
        description: 'Sethmini Caritas Ratnapura have been implementing a number of development programmes for the betterment of   the plantation community in the Sabaragamuwa Province. Estate workers in this region suffer due to poverty, daily wage system, line rooms, lack of access to safe water, low level of education, poor access to health, transport facilities and language barriers…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 09 February 2021',
        org: 'Caritas Sri Lanka',
        topic: '“I was homeless you gave me a shelter” A report from the Diocese of Mannar',
        image: 'images/Housing-Project-1-768x576.jpg',
        video: '', 
        description: 'People from Mullikulam, Mannar who were part of Musali DS division, displaced from their homeland due to the civil war and even after the resettlement process initiated by the government and other agencies, they couldn’t get back to their own lands due to various reasons. Only in the recent past, the people were able to…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 20 May 2020',
        org: 'Caritas Sri Lanka',
        topic: 'COVID-19 OUTBREAK IN SRI LANKA',
        image: 'images/WEB-PAGE-BACKG-new-2020-corona-768x543.jpg',
        video: '', 
        description: 'The present crisis situation in Sri Lanka due to the COVID 19 outbreak has led to severe socio economic repercussions. While the Government of Sri Lanka is gradually lifting the tight restrictions imposed for nearly 8 weeks in order to revive the economy, there is still no certainty as to when this disease outbreak will…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 20 May 2020',
        org: 'Caritas Sri Lanka',
        topic: 'Serve Humanity with Faith, Hope and Solidarity Caritas Sri Lanka’s Response to COVID-19 Pandemic',
        image: 'images/novel-coronavirus-illustration-m-768x384.png',
        video: '', 
        description: 'Serve Humanity with Faith, Hope and SolidarityCaritas Sri Lanka’s Response to COVID-19 Pandemic By Dr. Shemal Fernando, PhD  –  Senior Executive Manager CSL-SEDEC In the recent weeks, the lives of millions of people across the world have suddenly changed. For some, remaining at home has been an opportunity to reflect, to withdraw from the frenetic pace…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 03 March 2020',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Sri Lanka Delegates Visit Chennai on a Fact Finding Mission in Handling Differently Abled',
        image: 'images/IMG_8819-768x512.jpg',
        video: 'https://www.youtube.com/embed/your_youtube_id', 
        description: 'Caritas India’s Community Based Rehabilitation Forum (CBRF) had given the opportunity to 6 delegates from Caritas Sri Lanka to visit Chennai to learn about what is happening to differently abled and how India handles them. The delegates had the opportunity to experience the mechanism at village level, intermediary level and the governmental level. CBRF has…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Monday, 02 March 2020',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Sri Lanka Delegates Visit Chennai on a Fact Finding Mission in Handling Differently Abled',
        image: 'images/IMG_8819-768x512 (1).jpg',
        video: '', 
        description: 'Caritas India’s Community Based Rehabilitation Forum (CBRF) had given the opportunity to 6 delegates from Caritas Sri Lanka to visit Chennai to learn about what is happening to differently abled and how India handles them. The delegates had the opportunity to experience the mechanism at village level, intermediary level and the governmental level. CBRF has…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Friday, 14 February 2020',
        org: 'Caritas Sri Lanka',
        topic: 'Capacity Building of Counsellors (Tamil Medium) on Emotional Literacy School Programme.',
        image: 'images/WILE0581-768x576.jpg',
        video: '', 
        description: 'Emotional literacy helps people, especially youth and students to manage their own emotions effectively, appropriately and productively. It develops positive social interactions with other people in the society. The objectives of this programme are to increase the emotional literacy, well-being and resilience among the school students in order to prevent self-harm and suicidal behaviour. Through…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 13 February 2020',
        org: 'Caritas Sri Lanka',
        topic: 'World Day of the Sick 2020 – coronavirus outbreak, COVID-19.',
        image: 'images/images.jpg',
        video: '', 
        description: 'The flow of life is a mystery to everyone but God. Surrendering ourselves to His will allows us to navigate unspeakable, and seemingly endless pain. When God heals someone, He is accepting the suffering of Christ in place of our suffering (1 Peter 2:24) says “By his wounds you are healed. The above context was…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Friday, 15 November 2019',
        org: 'Caritas Sri Lanka',
        topic: 'Capacity building of Councilors on Emotional Literacy School Program',
        image: 'images/IMG_0187-768x512.jpg',
        video: '', 
        description: 'Emotional literacy helps people especially youth/students to manage their own emotions effectively, appropriately and productively, while also developing positive social interactions with other people in the society. Therefore, this programme is being implemented to increase the emotional literacy, well-being and resilience among the school students in order to prevent self-harm and suicidal behaviors. Through this…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Monday, 19 August 2019',
        org: 'Caritas Sri Lanka',
        topic: 'Visit of Ms. Martha Rubiano Secretary General of Caritas Norway.',
        image: 'images/69252540_433243620609794_8393171858018533376_n-768x576.jpg',
        video: '', 
        description: 'Ms. Martha Rubiano, Secretary-General of Caritas Norway visited places of Easter Sunday terror attack including  St. Anthony’s Shrine at Kochikade in Colombo and St.Sebestian’s  Church at Katuwapitiya in Negombo on Friday 16th August 2019 and met victims of the Easter Sunday attack.  Rev. Fr. Jude Raj Fernando the administrator of St. Anthony’s Shrine and Rev. Fr.…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Friday, 01 June 2018',
        org: 'Caritas Sri Lanka',
        topic: 'Workshop on CI Emergency Protocols and Toolkit',
        image: 'images/scan0007-2-768x502.jpg',
        video: '', 
        description: 'Caritas Internationalis (CI) in coordination with Caritas Asia organized a Training Programme on the CI Emergency Protocols & CI toolkit in Bangkok, Thailand from 23rd to 25th May 2018. The programme focused on the 3 pillars of the Caritas Emergency Response Framework which are mainly Coordination, Resource Mobilization using the CI appeal mechanism and the…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Monday, 06 November 2017',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Builds Houses in Trincomalee',
        image: 'images/DSC_0155-768x509.jpg',
        video: '', 
        description: 'Caritas Sri Lanka handed over 44 newly built houses to the families in Neelakerny Village on 23rd October 2017 with the funding support of Caritas Swiss. Neelakerny, a village in Muthur Divisional Secretariat was hit by two calamities over the past decade. In 2004 the Tsunami hit this area, and thereafter in 2006 when conflict…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 01 November 2017',
        org: 'Caritas Sri Lanka',
        topic: 'Bhavani’s New Home',
        image: 'images/Image-2-1.jpg',
        video: '', 
        description: 'Ms. Bhavani has a sister and two brothers, one of whom is a mason while her younger brother is a good electrical wiring technician. The family lost their parents during the Tsunami disaster of December 2004 and was looked after by relatives for a short period until a benevolent Catholic sister, Sr. Arul took them…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      }
    ];
  } 
  // DOCUMEENTARIES
  //else if(item.innerText.includes('CSL PLANTATION PROGRAMME')) {
   // entries = [
     // {
       // date: 'Tuesday, 08 July 2025',
        //org: 'Caritas Sri Lanka',
        //topic: 'Building Bridges: Bringing Plantation Youth Together for Peace and Leadership',
        //image: 'images/WhatsApp-Image-2025-06-26-at-14.09.52-768x512.jpeg',
        //video: '', 
        //description: 'Caritas Sri Lanka, in collaboration with Caritas Ratnapura – Sethmini and with the generous support of AGIAMONDO, successfully conducted a two-day residential workshop titled “Building Bridges: Bringing Plantation Youth Together for Peace and Leadership” on the 24th and 25th of June 2025 at the Buluthota Retreat Centre. This workshop was specially designed for youth from…',
        //category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        //readMoreLink: '#'
      //}
    //];
  //} 
  // Ecological Conservation & Plantation People (EC&PP)
  else if(item.innerText.includes('Ecological Conservation & Plantation People')) {
    const introText = `
    <p class="category-intro">
      Promoting ecological conservation and climate justice through the active involvement of local communities in 13 Dioceses and advocate & lobby for the dignity of the plantation communities who are commemorating 200 years of their arrival to the country in 2020s.
    </p>
  `;
 infoBox.innerHTML = introText; // <<< This makes it visible
    entries = [
      {
        date: 'Thursday, 10 October 2024',
        org: 'Caritas Sri Lanka',
        topic: 'Research Books Launching Event under LLPP',
        image: 'images/Cover-Page-B5-English-1-768x1091.jpg',
        video: '', 
        description: 'Caritas Sri Lanka proudly launched 02 essential research books in the context of the plantation community in Sri Lanka on 3rd October 2024 at CSL-SEDEC under the ‘Lighting the Lives of the Plantation People (LLPP) project. Ecological Conservation and Plantation People (ECPP) Unit has been implementing projects that underscore Caritas Sri Lanka’s commitments towards environmental stewardship…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
      date: 'Wednesday, 02 October 2024',
      org: 'Caritas Sri Lanka',
      topic: 'RIGHT TO EDUCATION FOR THE CHILDREN OF THE PLANTATION COMMUNITY IN SRI LANKA ISSUES, CHALLENGES AND FUTURE DIRECTIONS',
      pdf: 'pdf/download (2).pdf',
      video: '',
      description: 'This year (2023) marks the completion of two hundred years of existence of the upcountry Tamil people or Malaiyaha Tamils in Sri Lanka. It is assumed that the upcountry Tamil people were brought from India by the British colonial regime in 1823 to be employed in the coffee plantations in the upcountry area of the…',
      category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
      readMoreLink: '#'
      },
      {
        date: 'Tuesday, 08 July 2025',
        org: 'Caritas Sri Lanka',
        topic: 'Research Study on the Culture and Identity of the Plantation Community in Sri Lanka',
        pdf: 'pdf/download (3).pdf',
        video: '',
        description: 'The study focuses on the most pressing contemporary concerns concerning the culture and identity of Indian-Origin Tamils (IOTs) in Sri Lanka. During 1823, migrated Indian Tamils created a new socioeconomic group in the country and formed as were forced to focus primarily on the plantation sector, which had been developed by the British to gain…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 22 August 2024',
        org: 'Caritas Sri Lanka',
        topic: 'Addressing the Challenges of the Plantation Community: Insights from the LLPP Project Press Conference',
        image: 'images/WhatsApp-Image-2024-07-31-at-12.20.55_11c86e73-768x432.jpg',
        video: '', 
        description: 'On the 31st of July 2024, a significant press conference was held at Caritas SETIK in Kandy, addressing the issues faced by the plantation community. This was organized by the Caritas Sri Lanka ECPP unit under the LLPP (Lighting the Lives of the Plantation People Project) funded by Catholic Relief Services (CRS) and the event…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 22 August 2024',
        org: 'Caritas Sri Lanka',
        topic: 'Strengthening Collaboration: CSO Forum Empowers Plantation Communities through Strategic Planning and Capacity Building',
        image: 'images/DSC_6631-768x512.jpg',
        video: '', 
        description: 'The CSO Forum under the “Lighting the Lives of the Plantation People” (LLPP) project, funded by CRS – Catholic Relief Services, was held on 30th July 2024 at the scenic Tea Small Holdings Development Authority Training Centre in Hanthana, Kandy. This gathering brought together representatives from Kandy, Badulla, Ratnapura, Galle, Kurunegala, and Colombo DCs along…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 23 July 2024',
        org: 'Caritas Sri Lanka',
        topic: 'Research Validation on Culture and Identity of Plantation Community',
        image: 'images/IMG_0005-768x512.jpg',
        video: '', 
        description: 'On the 27th of June, the ECPP unit of Caritas Sri Lanka, under the LLPP project, conducted a significant research validation session at the CSL Conference Hall. This research focused on the culture and identity of the plantation community in selected districts. Expert academics and professionals attended the event, providing valuable insights and critiques to…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Friday, 14 June 2024',
        org: 'Caritas Sri Lanka',
        topic: 'World Environment Day Celebration 2024',
        image: 'images/WhatsApp-Image-2024-06-12-at-13.54.34-768x576.jpeg',
        video: '', 
        description: 'On June 5th, 2024, communities across various dioceses came together to celebrate World Environment Day, a globally recognized event dedicated to raising awareness and promoting action to protect our planet. The main objective of this day is to educate the public about environmental issues and inspire positive change. This year, the celebrations were held in…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 13 June 2024',
        org: 'Caritas Sri Lanka',
        topic: 'Agroecology Farmers Exchange Visit in Sri Lanka',
        image: 'images/01-768x512.jpg',
        video: '', 
        description: 'From May 14th to 19th, 2024, an Agro ecological Farmers’ Exchange Visit was arranged to the farmlands in Anuradhapura and Mannar, Sri Lanka. There were 12 farmers representing Caritas Bangladesh and UBINIG, Bangladesh and  Mada, Lebanon. This visit was  Co-hosted by Caritas Sri Lanka SEDEC and MONLAR, and funded by CAFOD, UK. The main objective…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 02 November 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Training Of Trainers (TOT) training in Basic Solid Waste Management at Kandy & Jaffna',
        image: 'images/WhatsApp-Image-2023-11-01-at-1.18.36-PM-768x338.jpeg',
        video: '', 
        description: 'Caritas Sri Lanka in collaboration with the resources of USAID, Clean City Blue Ocean Organization conducted two Training of Trainers (TOT) programs at Kandy and Jaffna. Sixty participants participated in the TOT held on 20th & 21st of October 2023 at Kandy representing Kandy, Badulla, Galle and Ratnapura Dioceses while another 70 participants participated in…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 18 October 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Empowering Communities Through Training: TOT Programme on Solid Waste Management',
        image: 'images/IMG_8118-768x512.jpg',
        video: '', 
        description: 'Waste management is a critical issue in Sri Lanka, with improper disposal causing environmental degradation and health hazards. To address this concern, Caritas Sri Lanka, in collaboration with USAID Clean Cities Blue Oceans (CCBO), is taking a significant step towards a cleaner and more sustainable Sri Lanka through the project: Stepping Stone to Safeguarding Sri…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Monday, 09 October 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Capacity Building Workshop on Advocacy and Lobbying for the staffs of Caritas Sri Lanka',
        image: 'images/IMG-20230930-WA0032-768x576.jpg',
        video: '', 
        description: 'Caritas Sri Lanka organized a capacity-building workshop on advocacy and lobbying for both its National Center staff and diocesan-level staff. The workshop took place on September 11th and 12th at the CSL-SEDEC auditorium, with 65 participants from the Diocesan Centers and the National Center. The workshop was conducted in both Sinhala and Tamil mediums, with…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Friday, 06 October 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Strengthening Partnership Skills: Workshop Empowering Caritas Sri Lanka Staff',
        image: 'images/PHOTO-2023-10-06-13-29-43-2-768x576.jpg',
        video: '', 
        description: 'Caritas Sri Lanka SEDEC successfully organized an impactful workshop on September 15, 2023,  aimed at enhancing the partnering capabilities of their Diocesan Project Coordinators and National Coordinators (NC) staff. The event, held at the SEDEC Auditorium in Colombo, brought together a diverse group of dedicated professionals eager to develop and refine their partnering skills. The…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 21 September 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Catholic Bishops Demand Action on Unresolved Socioeconomic Issues Faced by Plantation Community in Sri Lanka',
        image: 'images/0U7A1640-768x512.jpg',
        video: '', 
        description: 'In a significant press conference held at Caritas Sri Lanka, SEDEC, on June 30th, 2023, the Catholic Bishops of the Plantation Regions united their voices to address the longstanding unresolved socioeconomic issues faced by the Indian Origin Plantation Community in Sri Lanka. The press conference marked the 200th commemoration of the arrival of the Indian…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 16 August 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Sri Lanka joins hands with the Malayaga Makkal Walk “Tracing our roots to win our rights”',
        image: 'images/WhatsApp-Image-2023-08-12-at-06.46.01-768x354.jpeg',
        video: '', 
        description: 'The arrival of the first batch of Indian Origin Tamil Speaking workers took place from 1823 to 1824 as per historical evidences. These Indian Origin Tamil Speaking workers were brought from South India under a system of bonded labor by colonial rulers. Their purpose was to provide labor for the coffee plantations. These people had walked…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Saturday, 17 June 2023',
        org: 'Caritas Sri Lanka',
        topic: '2023 World Environmental Day Commemoration by Caritas Sri Lanka Diocesan Network',
        image: 'images/WhatsApp-Image-2023-05-18-at-16.37.55-768x576.jpg',
        video: '', 
        description: 'Introduction   World Environmental day is celebrated globally on 5th June from 1973. The day provides a platform for environmental activists to voice their concerns and highlight the negative impacts of global environmental issues to the global community. In that line, the theme for World Environmental Day 2023 focuses on ‘Solution for Plastic Pollution’ under…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 14 June 2023',
        org: 'Caritas Sri Lanka',
        topic: 'An Awareness session on the 200-year Journey and the Present Day Plight of the Plantation Community in Sri Lanka at the National Seminary Kandy',
        image: 'images/WhatsApp-Image-2023-05-22-at-14.40.33-768x373.jpeg',
        video: '', 
        description: 'An awareness session was conducted at the National Seminary in Kandy on 12th of May 2023 with the objective of enlightening the major seminary brothers and the staff regarding the social issues and structural discrimination faced by the plantation community in Sri Lanka for the past 200 years. Rev. Fr. Michael Rajendram, National Animator for the…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Monday, 12 June 2023',
        org: 'Caritas Sri Lanka',
        topic: 'World Water Day 2023 Commemoration by Caritas Sri Lanka Diocesan Network',
        image: 'images/WhatsApp-Image-2023-03-22-at-21.57.37-768x576.jpeg',
        video: '', 
        description: '“Humanity still has the ability to work together to build our common home” – Pope Francis- Introduction Water is one of the most important basic natural elements on which the planet Earth is comprised of, as it constitutes 71% of the land area. In addition, water is recognized as the giver and the source of…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 23 May 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Thammitigama Tank Restoration and Clean-up under the SSEP World Water Day Celebration 2023.v',
        image: 'images/WhatsApp-Image-2023-05-18-at-16.37.5401-768x576.jpg',
        video: '', 
        description: 'Thammittagama Village is situated in the Kurunegala District in Sri Lanka. A Village level environmental adult group was formed in the village under the ‘Stepping Stones to Safeguarding Sri Lanka’s Natural Environment project’ (SSEP), implemented by Caritas Sri Lanka in early 2023. After several discussions with the villagers, a serious issue which affects them badly…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 19 April 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Environmental Management and Leadership Program for Youth at Caritas Chilaw',
        image: 'images/PXL_20230330_070003687-768x576.jpg',
        video: '', 
        description: 'Caritas Sri Lanka (CSL) organized an Environmental Management and Leadership Program for the youth in the Diocese of Chilaw under the “Stepping Stone to Safeguarding Sri Lanka’s Natural Environment project” (SSEP). SSEP is a project implemented by Caritas Sri Lanka with the goal of creating an environmentally conscious community through advocating and lobbying against all…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 19 April 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Launch of the LLPP Facebook page to advocate for the rights of the Malayaga Tamils',
        image: 'images/IMG_7251-768x512.jpg',
        video: '', 
        description: 'The Facebook page, “Lighting the lives of the Plantation People” (LLPP) was launched on 25 October 2022 by Caritas Sri Lanka – SEDEC. The arrival of the first batch of Indian Origin Tamil Speaking workers took place from 1823 to 1824. They were brought in from South India as labourers by the British to work on…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 19 April 2023',
        org: 'Caritas Sri Lanka',
        topic: 'An Awareness Session for the Clergy of the Diocese of Kandy Diocese on mission of the Catholic Church in the Emancipation of the Plantation community in Sri Lanka',
        image: 'images/MG_8517-768x512.jpg',
        video: '', 
        description: 'An awareness session for clergy of the Diocese of Kandy was conducted on 4th of April 2023 at the Fatima Retreat House Lewella, Kandy with the aim of highlighting the social issues of the Plantation community and the mission of the church leaders in addressing the causes of structural discrimination that the plantation community (Malaiyaga…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 29 March 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Invitation to the Media personnel to cooperate with the journey of empowerment of the Plantation people.',
        image: 'images/IMG_8354-768x512.jpg',
        video: '', 
        description: 'A discussion was held on 16th of March 2023 at the Caritas Sri Lanka, SEDEC Auditorium to seek support and collaborations from the Colombo based media institutions, to highlight the issues faced by the plantation communities in Sri Lanka. In 2023/24, Sri Lankans would remember and commemorate the 200 years of arrival of the plantation community…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Monday, 20 March 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Validation of the Plantation Research',
        image: 'images/IMG_7970-Copy-768x512.jpg',
        video: '', 
        description: 'Validation of the research on Challenges and Future Directions of Children’s Education Rights in Plantation Communities of Sri Lanka was held on 9th of March from 2.00pm to 5.00pm at the Caritas SEDEC upper conference Hall. The research is one of the major activities under the “Lighting the Lives of Plantation People” Program (LLPP) with…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Friday, 10 March 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Educational Exposure tour with Environmental Children’s Group in Mannar Diocese',
        image: 'images/DSCN9942-768x576.jpg',
        video: '', 
        description: 'Three Village Level Environmental Children’s Groups (VLECGs) were formed in selected villages under SSEP in Mannar District. A group of 155 children from VLECGs were taken for an educational exposure tour on 13th February 2023. The main objective of this exposure visit is to educate children about natural resources and the importance of conserving natural…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 09 March 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Anuradhapura Youth Exposure Visit to Sinharaja Rainforest',
        image: 'images/IMG_0374-768x512.jpg',
        video: '', 
        description: 'Climate change is an inherent social issue that can upset anyone’s life in countless ways. Climate change is causing different social, economic, and public health issues on all the communities around the world. Therefore, advocating for climate justice by the local communities is the most essential solution to this worsening scenario. On that note, ‘Stepping…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Monday, 20 February 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Coconut Oil Production Factory Opening Ceremony at Keeri – Mannar',
        image: 'images/9.-Opening-of-the-production-center-768x432.jpg',
        video: '', 
        description: '“Stepping Stone to Safeguarding Sri Lanka’s Natural Environment” (SSEP) is a project implemented by Caritas Sri Lanka in all its 13 DCs from January 2022. It is a three-year project funded by Misereor with the goal of forming environmental sensitive empowered communities. The project will assist the selected communities who face the effects of environmental…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Friday, 17 February 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Formation of National Civil Society Forum Governing Body under the program of Lighting the Lives of the Plantation People',
        image: 'images/IMG_7399-768x512.jpg',
        video: '', 
        description: 'Formation of Governing Body of the National Civil Society Organization Forum was held on the 11th of February 2023 at Caritas Sri Lanka SEDEC Auditorium.  This event was held in connection with the creation of CSO forums in the first year in all the five Plantation Dioceses such as Kandy, Badulla, Ratnapura, Galle and Colombo.…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Friday, 13 January 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Holy Father Donates medicines to Sri Lanka',
        image: 'images/IMG_6544-768x512.jpg',
        video: '', 
        description: 'His Excellency Most Rev. Dr. Brian Udaigwe, the Apostolic Nunciature and the diplomatic mission of the Holy See (Vatican) to Sri Lanka handed over the medicines to Dr. Asela Gunawardena, Director General of Health Services at the Ministry of Health today on Friday, the 13th of January 2023 with the presence of directors and officers…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 11 January 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Awareness session for Conference of Major Religious Superiors (CMRS) on the Plight of Plantation Community and CSL’s intervention toward Betterment of their Lives',
        image: 'images/WhatsApp-Image-2023-01-09-at-15.18.53-768x432.jpeg',
        video: '', 
        description: 'An awareness session for the major Religious Superiors of the CMRS on the social issues of the plantation community in Sri Lanka was held Monday 28 November, 2022 at the Good shepherd Vocational Training Centre at Bolawalana in Negombo. Rev. Fr. Luke Nelson, Director of Caritas Sri Lanka- SEDEC (CSL) delivered a speech on plight of plantation community…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Monday, 09 January 2023',
        org: 'Caritas Sri Lanka',
        topic: '“A small gesture of charity in the face of Hunger” Feeding Program by Missionaries of Charity Sisters and Caritas Sri Lanka',
        image: 'images/6f03bd33-2864-49ce-8b2e-16638f83a245-768x576.jpg',
        video: '', 
        description: '  “There is so much indifference in the face of suffering, May we overcome indifference with concrete acts of charity” – Pope Francis  Background Sri Lanka is currently going through the worst economic crisis since its independence in 1948. Years of economic mismanagement, corruption, short-sighted policy making, and overall lack of good governance left Sri Lanka…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 03 January 2023',
        org: 'Caritas Sri Lanka',
        topic: 'Catholic Relief Service Representative undertakes visit to Galle Diocese in Sri Lanka',
        image: 'images/WhatsApp-Image-2022-12-06-at-21.54.07-768x345.jpeg',
        video: '', 
        description: 'The Executive Director of Catholic Relief Services (CRS) Mr. Senthil Kumar visited CODESEP ( Community Development Service for Plantation) in the Ratnapura Dioceses on a fact-finding mission from 5th and 6th December 2022. Rev. Fr. Luke Nelson , Director, Caritas Sri Lanka , Rev. Fr Lasantha Fonseka, Director ,Caritas Sed Galle and Rev. Fr. Anthony…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 21 December 2022',
        org: 'Caritas Sri Lanka',
        topic: 'Mangrove Tree Planting Campaign organized by Caritas Jaffna – HUDEC',
        image: 'images/315456301_3431995073790424_7688863710118059365_n.jpg',
        video: '', 
        description: 'Mangrove forests are unique eco-systems that have ecological, biological, and socio-economic functions. These types of plants play a vital role in maintaining the equilibrium of the eco-system and ensure the stability of our world. Mangroves are nature’s fundamental barrier against soil erosion, an ideal place for sea plant growth, and a refuge for fish, and…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 21 December 2022',
        org: 'Caritas Sri Lanka',
        topic: 'Restored well-opening ceremony at Mandativu Maha Vidyalayam – Jaffna',
        image: 'images/DSC_9868-768x512.jpg',
        video: '', 
        description: 'Mandaitivu Maha Vidyalayam is a government secondary school located in Jaffna District. There are 200-250 students studying in the school. Under the ‘Stepping Stone to Safeguarding Sri Lanka’s Natural Environment’ (SSEP) project by Caritas- HUDEC Jaffna an Environmental Children’s Group was formed in this school. However, the students faced severe drinking water problems here since…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 21 December 2022',
        org: 'Caritas Sri Lanka',
        topic: 'Annual Review and Project Design Meeting – Stepping Stone Environmental Project (SSEP)',
        image: 'images/IMG_0943-768x512.jpg',
        video: '', 
        description: 'The SSEP Annual and Project design meetings were held on the 5th and 6th of December 2022 at the St. Jhon Mary Vianney Clergy house, Bulutota, with the participation of 45 project coordinators and field officers. In addition, a few Diocesan Directors from Colombo, Jaffna, Kandy, Kurunegala and Rathnapura were also present during the two-day…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Friday, 14 October 2022',
        org: 'Caritas Sri Lanka',
        topic: 'World Children’s Day Celebration',
        image: 'images/004.png',
        video: '', 
        description: 'Caritas Chilaw and Colombo celebrated the World Children’s day 2022 with the Environmental Children Groups that they have formed under ‘Stepping stone to safe guarding Sri Lanka’s Natural Environment’ project, (SSEP).',
        description: 'Colombo Caritas Colombo Seth Sarana celebrated the Children’s day 2022 at Muturajawela on 01st of October 2022. A group of 120 children from Moratuwa,…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 12 October 2022',
        org: 'Caritas Sri Lanka',
        topic: 'Awareness Creation on Advocacy and Lobbying for Environmental Justice Issues.',
        image: 'images/IMG_9255-768x512.jpg',
        video: '', 
        description: 'An environmental advocacy related workshop was organized by Caritas Sri Lanka with the active collaboration of Caritas Sethmini Ratnapura under the Stepping Stone to Safeguarding Sri Lanka’s Natural Environment (SSEP) project. This workshop was held on 4th October 2022 at Caritas Sethmini Ratnapura. The SSEP team from National Centre and the staffs from Colombo, Chilaw,…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 20 July 2022',
        org: 'Caritas Sri Lanka',
        topic: 'Information Sharing Sessions among the Journalists & Reporters On the Lives & the unresolved Social Issues of the Plantation People In Sri Lanka',
        image: 'images/WhatsApp-Image-2022-07-20-at-9.15.46-AM-768x576.jpeg',
        video: '', 
        description: 'Information Sharing Sessions among JournalistsTwo separate Information Sharing Sessions for the Journalists of Mass media were conducted by CARITAS SRI LANKA – in Tamil stream on the 1st June at Nuwara Eliya Parish Pastoral Centre and in Sinhala stream at SED Galle Centre on the 8th June 2022.  The Media personals from the Plantation Dioceses of…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 20 July 2022',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Sri Lanka commemorating the World Environmental Day',
        image: 'images/006-768x431.jpg',
        video: '', 
        description: 'Caritas Sri Lanka (CSL) conducted a major cleanup and tree planting Campaign Island wide to commemorate the World Environment Day on 05th of June 2022. Around 2000 adults, youth and children participated in these events. The 2022 World Environment Day campaign under the theme, “Only One Earth” calls for collective, transformative action on a global scale…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 05 May 2022',
        org: 'Caritas Sri Lanka',
        topic: '‘Lighting the lives of the Plantation People’- LLPP An Empowerment Program to better the lives Of the people of the Plantation Community in Sri Lanka',
        image: 'images/WhatsApp-Image-2022-03-08-at-20.28.37-768x548.jpeg',
        video: '', 
        description: 'The Plantation Community in Sri Lanka mainly consists of the Indian Origin Tamils who are presently known as the ‘Malayaga Tamils” meaning Upcountry Tamils. As per the historical evidence, the arrival of the 1st batch of Indian Origin Tamil Speaking workers happened from 1823 to 1824, thus making 2023/2024 as the 200th years of their…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 27 April 2022',
        org: 'Caritas Sri Lanka',
        topic: 'Tree Planting Campaign at Kahagalla- Haputale',
        image: 'images/b18db496-a36f-41d8-b1e9-02c44d6a9fc6-768x512.jpg',
        video: '', 
        description: 'Caritas Badulla- USCOD organized a tree-planting campaign at Kahagalla, Haputale on 26 March 2022 under the Stepping Stone Environment Project implemented with the support of the funding partner, ‘MISEREOR’ The tree-planting campaign was organized by the Village Level Children Group (VLCG) with the support and coordination of the Village Level Elders Group (VLEG) formed under…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 20 April 2022',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Colombo-Sethsarana organized a Beach Cleanup Campaign at Diyalagoda',
        image: 'images/WhatsApp-Image-2022-04-12-at-2.20.58-PM-1-768x576.jpeg',
        video: '', 
        description: 'Caritas Colombo-Setharana organized a beach clean-up campaign on 31 March 2022 from 10am to 10:50am at Diyalagoda. Over the recent years, the environmental composition in Diyalagoda has been rapidly changing due to high levels of human activity and other human-related environmental issues.  During a community gathering in view of forming a Village Level Environment Group by…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 12 April 2022',
        org: 'Caritas Sri Lanka',
        topic: 'Visiting SED Galle on the SSEP',
        image: 'images/6cd47ba6-18d1-4e46-a9dd-aa68aa68361b-Copy-768x576.jpg',
        video: '', 
        description: 'Caritas Sri Lanka National Centre team made a Monitoring and Evaluation visit (M & E) to Galle Diocesan Caritas Centre under the “Stepping Stone to Safeguarding Sri Lanka’s Natural Environment Project’ (SSEP) on 30th and 31st March 2022. Rev. Fr Lasantha Fonseka, Director of SED Galle and Mr. Priyantha Indunil SSEP Project Coordinator of the…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 07 April 2022',
        org: 'Caritas Sri Lanka',
        topic: 'Mangrove Planting Campaign in Batticaloa',
        image: 'images/IMG_20220317_094513-Copy-768x576.jpg',
        video: '', 
        description: 'Protecting and restoring mangroves is hugely important in the battle against human-induced climate change. By realizing all the importance of planting mangrove trees, under the  project ‘Stepping stone safeguarding Sri Lanka’s Natural Environment’, Caritas EHED Batticaloa Diocesan center organized a Mangrove Planting Campaign on 17 March 2022.   This tree planting campaign was organized by…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Wednesday, 06 April 2022',
        org: 'Caritas Sri Lanka',
        topic: 'M & E Visit to Mannar and Vanni under the Stepping Stone Environment Project (SSEP)',
        image: 'images/IMG_9701-768x512.jpg',
        video: '', 
        description: 'The ecosystem can be safeguarded from degradation only when humans start working towards it. In achieving this objective Caritas Sri Lanka with the collaboration of 13 Diocesan Centers, covering the entire island is in the process of forming 156 environmental groups, under the project titled, “A Stepping Stone to Safeguarding Sri Lanka’s Natural Environment” funded…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Friday, 10 December 2021',
        org: 'Caritas Sri Lanka',
        topic: 'Pre-Orientation for the Plantation Programme at Mahagastota, Nuwaraeliya',
        image: 'images/WhatsApp-Image-2021-11-30-at-14.32.35-768x576.jpeg',
        video: '', 
        description: 'A 2-day pre-orientation programme was held in Mahagastota, Nuwaraeliya on 29 and 30 November 2021 under the new programme designed for the empowerment of the tea plantation communities in Sri Lanka. The programme comes with a 10-year vision and is titled, “Lighting the Lives” – Empowering the Green Gold Harvesters, which is an extension of…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      }
    ];
  } 
  //// ADD MORE HERE



  // Default for other categories
  else {
    entries = [
      {
        date: '',
        org: '',
        topic: item.innerText,
        image: '',
        video: '',
        description: 'Details not available yet.',
        category: '',
        readMoreLink: '#'
      }
    ];
  }

  // Build HTML for all entries
 entries.forEach(entry => {
  const container = document.createElement('div');
  container.className = 'info-entry';
  container.innerHTML = `
    <div class="info-header" style="text-align: justify;">
      <span class="info-date">${entry.date}</span>
      <span class="info-org">${entry.org}</span>
    </div>
    <hr>
    <h3 class="info-topic" style="text-align: justify;">${entry.topic}</h3>

    ${entry.image ? `<img src="${entry.image}" alt="${entry.topic}" class="info-image">` : ''}

    ${entry.pdf ? `
      <div class="info-pdf" style="text-align:center; margin:12px 0;">
        <a href="${entry.pdf}" download target="_blank" class="pdf-download-btn">
          CLICK HERE TO DOWNLOAD PDF
        </a>
      </div>
    ` : ''}

    ${entry.video ? `<div class="info-video"><iframe width="100%" height="300" src="${entry.video}" frameborder="0" allowfullscreen></iframe></div>` : ''}

    <p class="info-description" style="text-align: justify;">${entry.description}</p>
    <hr>
    <div class="info-footer" style="text-align: justify;">
      <span class="info-category">${entry.category}</span>
      <a href="${entry.readMoreLink}" class="read-more-btn">READ MORE</a>
    </div>
  `;
  infoBox.appendChild(container);
});

// Scroll into view smoothly
infoBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


