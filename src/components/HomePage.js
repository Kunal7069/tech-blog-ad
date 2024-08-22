import Navbar from './Navbar';
import Post from './Post';
import Footer from './Footer';
// import './App.css';
export default function HomePage(props) {
    const postData = [
        {
            department: "Web Tech",
            title: "Top 7 JavaScript One Liners",
            author: "Amit Singh",
            designation: "TCE",
            info: `This post tells you about best approaches 
                   to write single line codes in JavaScript. 
                   Use this post as a quick guide to 
                     short but important JS codes`,
            imageUrl: "https://tse2.mm.bing.net/th?id=OIP.jd7HAZKVv-4M7N2GLQqpOQHaFO&pid=Api&P=0&h=180" // Example image URL
        },
        {
            department: "DSA",
            title: "Top Interview DSA Questions",
            author: "Jatin Sharma",
            designation: "TCE",
            info: `No need to worry about technical round interviews 
                   as this post will guide you step by step to 
                   prepare for DSA round`,
            imageUrl: "https://via.placeholder.com/300x200?text=DSA" // Example image URL
        },
        {
            department: "Content",
            title: "Best Antiviruses of 2023",
            author: "Shobhit Sharma",
            designation: "TCE",
            info: `Worried about your PC safety? No Problem, 
                   this post tells you about the best antiviruses 
                   to choose in 2023`,
            imageUrl: "https://via.placeholder.com/300x200?text=Antivirus" // Example image URL
        }
    ];
    
    return (
        <div>
        <Navbar />
        <div className='mt-12 p-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {postData.map((e, index) => (
                    <Post key={index} content={e} />
                ))}
            </div>
        </div>
        <Footer/>
    </div>
    
    );
}
