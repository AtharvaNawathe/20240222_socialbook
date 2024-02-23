// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialBook'; // Add this line to define the 'title' property

  stories = [
    { imgSrc: 'https://i.postimg.cc/TPh453Zz/upload.png', name: 'Post Story', class: 'story1' },
    { imgSrc: 'https://i.postimg.cc/3WMPYHD8/raj-1.jpg', name: 'Raj', class: 'story2' },
    { imgSrc: 'https://i.postimg.cc/prkq9YsJ/arvind-2-Photoroom.jpg', name: 'Arvind', class: 'story3' },
    { imgSrc: 'https://i.postimg.cc/m2Dw2nSR/shardad-1.jpg', name: 'Sharad', class: 'story4' },
    { imgSrc: 'https://i.postimg.cc/HL53179y/Namo.jpg', name: 'NAMO', class: 'story5' },
  ];

  onlineUsers = [
    { name: 'Raj Thackeray', img: 'https://i.postimg.cc/dV9nCg88/raj-2.jpg' },
    { name: 'Arvind Kejriwal', img: 'https://i.postimg.cc/bwYjJpBr/arvind-1.jpg' },
    { name: 'Sharad Pawar', img: 'https://i.postimg.cc/m2Dw2nSR/shardad-1.jpg' },
    { name: 'Narendra Modi', img: 'https://i.postimg.cc/HL53179y/Namo.jpg' }
  ];

  shortcuts = [
    { name: 'Covid 19 Recovery', img: 'https://i.postimg.cc/131fYnXT/covid.jpg' },
    { name: 'Countering terrorism', img: 'https://i.postimg.cc/pVnjGtkm/terr.jpg' },
    { name: 'Energy', img: 'https://i.postimg.cc/kXKx4dt0/energy.jpg' },
    { name: 'Science, Technology, AND Innovation', img: 'https://i.postimg.cc/Ls6fNY0S/science.jpg' }
  ];

  posts = [
    {
      profileImg: 'https://i.postimg.cc/qMFwkkBZ/rg2.jpg',
      username: 'Rahul Gandhi',
      timestamp: 'Feb 23 2024, 13:40 pm',
      text: 'साइकिल पर 200-200 किलो कोयला लेकर रोज़ 30-40 किलोमीटर चलने वाले इन युवाओं की आय नाम मात्र है।बिना इनके साथ चले, इनके भार को महसूस किए, इनकी समस्याओं को नहीं समझा जा सकता। इन युवा श्रमिकों की जीवनगाड़ी धीमी पड़ी, तो भारत निर्माण का पहिया भी थम जाएगा।',
      postImg: 'https://i.postimg.cc/FsxKnYp1/cycle.jpg',
      likes: 1000,
      comments: 405,
      shares: 80
    },

    {
      profileImg: 'https://i.postimg.cc/qMFwkkBZ/rg2.jpg',
      username: 'Rahul Gandhi',
      timestamp: 'Jan 2 2023, 10:40 am',
      text: "भारत जोड़ो न्याय यात्रा आप सभी की यात्रा है इस संघर्ष में हर न्याय योद्धा और न्यायप्रिय नागरिक का साथी है, न्याय यात्रा ऐप - एक डिजिटल माध्यम अभियान से जुड़ने का, सामर्थ्य के अनुसार अपना योगदान देने का।अभी डाउनलोड करें न्याय यात्रा ऐप",
      postImg: 'https://i.postimg.cc/QtfmHzWf/ra2.jpg',
      likes: 120000,
      comments: 450,
      shares: 200
    },

    {
      profileImg: 'https://i.postimg.cc/qMFwkkBZ/rg2.jpg',
      username: 'Rahul Gandhi',
      timestamp: 'Jan 1 2024, 11:44 am',
      text: 'आज UP पुलिस की परीक्षा का पेपर लीक होने की शिकायत लेकर कुछ छात्र मिलने आए. लीक हुए पेपर ने 50 लाख से अधिक मेहनती अभ्यर्थियों की वर्षों की मेहनत पर पानी फेर दिया।',
      postImg: 'https://i.postimg.cc/xCHRPPq2/ra3.jpg',
      likes: 120400,
      comments: 755,
      shares: 70
    },

    {
      profileImg: 'https://i.postimg.cc/qMFwkkBZ/rg2.jpg',
      username: 'Rahul Gandhi',
      timestamp: 'Jun 23 2018, 18:40 pm',
      text: 'अमेठी के मेरे प्यारे भाइयों और बहनों, आपसे मिली मोहब्बत, स्वागत और सम्मान के लिए दिल से धन्यवाद।',
      postImg: 'https://i.postimg.cc/sg3y5n6p/ra4.jpg',
      likes: 190000,
      comments: 458,
      shares: 207
    },

    {
      profileImg: 'https://i.postimg.cc/qMFwkkBZ/rg2.jpg',
      username: 'Rahul Gandhi',
      timestamp: 'Aug 20 2024, 15:40 pm',
      text: 'Congress Parliamentary Party Chairperson, Smt. Sonia Gandhi ji filed her nomination for the Rajya Sabha from Rajasthan, today.',
      postImg: 'https://i.postimg.cc/x875nFXB/ra5.jpg',
      likes: 1200770,
      comments: 455,
      shares: 204
    },
   
  ];
}
