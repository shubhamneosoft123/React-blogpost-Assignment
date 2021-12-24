
import './App.css';
import { Post } from './components/Post';

function App() {

 
  const postList=[
    {"id":1,"postname":"Life is to be valued daily!","image":"blog1.jpg","discription":"As I write this, I am thinking about how many people are in this world that have stress, anxiety, worry, and depression. It is a worsening pandemic that effects more people than any virus ever could. Mental health concerns are VERY very real and have an overall effect on someone that can truly be extremely detrimental to their health and adults in America reported considering killing themselves at one point during the year That statistic is truly alarming","author":"Blake Riedel","date":"04,Feb"},
    {"id":2,"postname":"Purpose needs to be purposeful","image":"blog2.jpg","discription":" It is a worsening pandemic that effects more people than any virus ever could. Mental health concerns are VERY very real and have an overall effect on someone that can truly be extremely detrimental to their health and adults in America reported considering killing themselves at one point during the year That statistic is truly alarming","author":"Robert.T","date":"13,july"},
    {"id":3,"postname":"The Three Trees- Our purpose fulfilled","image":"./blog3.jpg","discription":" I am thinking about how many people are in this world that have stress, anxiety, worry, and depression. It is a worsening pandemic that effects more people than any virus ever could. Mental health concerns are VERY very real and have an overall effect on someone that can truly be extremely detrimental to their health and adults in America reported considering killing themselves at one point during the year That statistic is truly alarming","author":"John.K","date":"29,jan"},
    {"id":4,"postname":"The Art of Seeing","image":"blog4.jpg","discription":"Reading Thoreau made me realize how little I saw. Sure, my eye captured light signals, and my mind processed them, but did I really see? I was, at best, a lazy seer. A lot of us are, which strikes me as odd, given that we live in an allegedly visual culture. The truth is: we are a visual culture the way McDonald’s is a restaurant. We consume a lot of images but savor very few.","author":"Blake Riedel","date":"18,Dec"},
    {"id":5,"postname":"Scenes From Quarantine","image":"blog5.jpeg","discription":"As I write this, I am thinking about how many people are in this world that have stress, anxiety, worry, and depression. It is a worsening pandemic that effects more people than any virus ever could. Mental health concerns are VERY very real and have an overall effect on someone that can truly be extremely detrimental to their health and adults in America reported considering killing themselves at one point during the year That statistic is truly alarming","author":"Sussan.D","date":"26,March"},
    {"id":6,"postname":"Things I Wish My Students Knew","image":"blog6.jpeg","discription":"As I write this, I am thinking about how many people are in this world that have stress, anxiety, worry, and depression. It is a worsening pandemic that effects more people than any virus ever could. Mental health concerns are VERY very real and have an overall effect on someone that can truly be extremely detrimental to their health and adults in America reported considering killing themselves at one point during the year That statistic is truly alarming","author":"Nancy P","date":"15,Sept"},
    {"id":7,"postname":"My Favorite Podcast Is Talking To You On The Phone For Hoursl","image":"blog7.jpeg","discription":"As I write this, I am thinking about how many people are in this world that have stress, anxiety, worry, and depression. It is a worsening pandemic that effects more people than any virus ever could. Mental health concerns are VERY very real and have an overall effect on someone that can truly be extremely detrimental to their health and adults in America reported considering killing themselves at one point during the year That statistic is truly alarming","author":"Blake Riedel","date":"21,May"},
    {"id":8,"postname":"Is Hope a Dirty Word?","image":"blog8.jpeg","discription":"I would like to dismiss 2021 as a terrible, no-good, very bad year, a year to be sept away and forgotten as quickly as possible. After all, it was a year that began with the insurrection and was quickly followed by my ALS diagnosis. Dire on both the public and private fronts. Such a year can’t possibly have been anything other than bad. And yet — it was also the year that I not only had a new book published, I also sold two new books (on the same day!) to come out in 2022","author":"Carry sk","date":"21,May"},
    {"id":9,"postname":"How to Get Addicted to Writing","image":"blog9.jpeg","discription":"Addictions are usually addictions to consumption. I’m no stranger to addiction. I’ve tried pot, booze, people, sex, food, caffeine, histrionics, TV, and news scrolling. I’ve tasted many things to alter my mood and every one of them came up empty. In the end, it’s still up to me to be…","author":"Lissa.N","date":"02,October"},
    {"id":10,"postname":"Thank You for Writing With Us in 2021","image":"blog10.jpeg","discription":"We just concluded our last unstructured writing hour of 2021 — a time for creators of all stripes to come together on Zoom, open up a draft Medium post (or Word document, or Google doc) and write. Thank you for spending time with us, if you could make it. And…","author":"Martin.JK","date":"13,Dec"},
  
   
]
  return (
    <>
    <h1>Blogs</h1>
   <div class="container">
   
    <Post pList={postList}/>
   
   </div>
   <h1>Thank You ...!</h1>
    </>
  );
}

export default App;
