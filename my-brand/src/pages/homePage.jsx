import axios from 'axios'
import React, { useState,useEffect} from 'react'
import '../css/homePage.css' 
import lap1 from '../images/lap1.jpg'
import port1 from '../images/port1.PNG'
import port6 from '../images/port 6.png'
import port2 from '../images/port2.jfif'
import port4 from '../images/port4.jfif'
import port5 from '../images/port5.jfif'

export default function HomePage() {
  const [blogs,setblogs] = useState([])
  useEffect(()=>{
    fetchBlogs();
  },[blogs]);
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const fetchBlogs= async()=>{
    await axios.get('https://my-brand-raphaela-production.up.railway.app/blogs/All')
                .then((res)=>{
                    setblogs(res.data)
                    
                })
  }

  const handleFormSubmit = async(e)=>{
    e.preventDefault();
    await axios.post('https://my-brand-raphaela-production.up.railway.app/queries/SendQuery',{name:name,email:email,message:message })
               .then((res)=>{
                console.log(res.data);
                setName('')
                setEmail('')
                setMessage('')
               }
               )
  }
  
  return (
    <div>
      <div class="body-container">
        <nav>
            <h2 class="nav-logo">RM.</h2>
            <div class="nav-links" id="navLinks">
                <i class="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    <li class="links active" ><a  href="#header" >HOME</a></li>
                    <li class="links"><a href="#about" >ABOUT</a></li>
                    <li class="links"><a href="#skills" >SKILLS</a></li>
                    <li class="links"><a href="#portfolio" >PROJECTS</a></li>
                    <li class="links"><a href="#blog" >BLOGS</a></li>
                    <li class="links"><a href="#cta" >CONTACT</a></li>
                    {/* <li class="links"><a href="./dashboard.html" id="hideDash">Dashboard</a></li> */}
                    <li><button class="hero-btn" id="loginOrOut" onclick="window.location.href='./Login/login.html';">Login</button></li>
                </ul>
                
            </div>
            <i class="fa fa-bars" onclick="showMenu()"></i>
        </nav>
        <section class="header" id="header">
        
            <div class="text-box">
                <h2> <span>Hi</span>, I'm Raphaela</h2>
                <h3>And I'm a <span>Software Engineer</span></h3>
                <a href="#cta" class="hero-btn">Contact Me</a>
            </div>
        </section>

    <section class="about" id="about">
        <h1 >About Me</h1>
        <div class="about-row">
           
            <div class="about-col">
                <div class="about-img">
                    <img src="./images/about.jpg" alt="img" />
                </div>
            </div>
            <div class="about-col">
                
                <h2>Software Engineer</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="https://raphaela664.github.io/raphaela.github.io/" class="hero-btn">View Resume</a>
            </div>
           
        </div>

        
    </section> 
    

    <section class="skills" id="skills" >
        <h1 >Skills</h1>
        <div class="row row-1">
            <div class="skills-col " id="skills-col1">
                <h3>Web Design</h3>
                <p>Lorem Ipsum has been the industry's <br /> standard
                    dummy text ever since the 1500s.</p>
            </div>
            <div class="skills-col">
                <h3>SQL development</h3>
                <p>Lorem Ipsum has been the industry's <br /> standard
                    dummy text ever since the 1500s.</p>
            </div>
        </div>
        <div class="row row-2">
            <div class="skills-col" id="skills-col1">
                <h3>UIUX Design</h3>
                <p>Lorem Ipsum has been the industry's <br /> 
                    standard dummy text ever since the 1500s.</p>
            </div>
            <div class="skills-col">
                <h3>Cyber Security</h3>
                <p>Lorem Ipsum has been the industry's <br /> standard
                    dummy text ever since the 1500s.</p>
            </div>
        </div>
       
    </section>
    
    <section class="portfolio" id="portfolio" >
        <h1 >Portfolio</h1>
        <div class="headings">
            <h3>All</h3>
            <h3>WEB DESIGN</h3>
            <h3>UIUX DESIGN</h3>
            <h3>SQL DEVELOPMENT</h3>
            <h3>CYBER SECURITY</h3>
            
        </div>
        
        <div class="row row-1">
            <div class="portfolio-col">
                <img src={port1} />
            </div>
            <div class="portfolio-col">
                <img src={port6} />
            </div>
            <div class="portfolio-col">
                <img src={port2} />
            </div>
        </div>
        <div class="row row-1">
            <div class="portfolio-col">
                <img src={port4} />
            </div>
            <div class="portfolio-col">
                <img src={port5} />
            </div>
            <div class="portfolio-col">
                <img src="./images/Emerging-web-design-trends-for-2021.jpeg" />
            </div>
        </div>
        
    </section>
    
    <section class="blog" id="blog" >
        <h1 >Latest From The Blog</h1>
        {
            blogs.map((blog)=>{
                return (
                    <div class="blog-row" key={blog._id}>
                    <div class="blog-col">
                        <img src={blog.image}/>
                    </div>
                    
                    <div class="blog-col textplace">
                        <h3>{blog.title}</h3>
                        <p>{blog.blogContent.length > 100
                              ? blog.blogContent.split(" ").slice(0, 100).join(" ") +
                                " ..."
                              : blog.blogContent}</p>
                        <p><b>Author:</b> Raphaela MAHORO</p>
                        <a href="./blog.html">Read More...</a>
                        <div class="reaction">
                            <i class="fa fa-thumbs-up" aria-hidden="true"></i><p>{blog.blog_likes.length}</p>
                            <i class="fa fa-comment"></i><p>{blog.blog_comments.length}</p>
                        </div>
                    </div>  
                    
                    </div>
                )
            })
        }
        <div class="blog-row">
            <div class="blog-col">
                <img src="./images/blog1.png"/>
            </div>
            
            <div class="blog-col textplace">
                <h3>How to Unlock the Power of Design Systems</h3>
                <p>Good design systems can help you create digital 
                products with efficiency and consistency. 
                But great design systems will support and 
                strengthen your team’s creativity at the same time.</p>
                <p><b>Author:</b> Sheldon Cooper</p>
                <a href="./blog.html">Read More...</a>
                <div class="reaction">
                    <i class="fa fa-thumbs-up" aria-hidden="true"></i><p>10</p>
                    <i class="fa fa-comment"></i><p>2</p>
                </div>
            </div>  
            
        </div>

        <div class="blog-row">
            <div class="blog-col">
                <img src="./images/blog2.png" />
            </div>
            <div class="blog-col textplace">
                <h3>Web Accessibility: the Complete Learning Guide</h3>
                <p>Web accessibility (often referred to by its abbreviated “a11y” form) 
                   is something many internet users don’t think about,
                   yet it affects almost all of us in some way. 
                   Accessibility is about you, your friends, colleagues, and family members.
                   It’s about having empathy for other internet users.
                
                </p>
                <p><b>Author:</b> colby Wesley</p>
                <a href="./blog.html">Read More...</a>
                <div class="reaction">
                    <i class="fa fa-thumbs-up"></i><p>8</p>
                    <i class="fa fa-comment"></i><p>0</p>
                </div>
                
            </div>
            
        </div>
        
        
      
    </section>
   
    <section class="cta get-in-touch" id="cta" >
            <h1 >Get In Touch</h1>
            <div class="cta-row">
                <div class="cta-col">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <p>Call Me <br/>
                    +250783729100</p>
                </div>
                <div class="cta-col">
                    <i class="fa fa-map-marker" ></i>
                    <p>Address <br/>
                        Rwanda, Kigali</p>
                </div>
                <div class="cta-col">
                    <i class="fa fa-envelope-o" ></i>
                    <p>Email <br/>
                    mahoraphy02@gmail.com</p>
                </div>
            </div>
            <div class="cta-form">
                <form onSubmit={handleFormSubmit}>
                    <div class="input-row" >
                        <div class="input-group">
                            <input type="text" name="FullName"  id="name" required value={name} onChange={(e)=>{
                                setName(e.target.value)
                            }} />
                            <label for="name"><i class="fa fa-user"></i> Your Name</label>

                        </div>
                        <div class="input-group">
                            <input type="email"  id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Enter a proper email ID"  
                             value={email} onChange={(e)=>{
                                setEmail(e.target.value)
                            }} required />
                            <label for="email"><i class="fa fa-envelope"></i> Your Email</label>
                        </div>
                    </div>
                    
                    <div class="input-group">
                        <textarea id="message" rows="10"  value={message} onChange={(e)=>{
                                setMessage(e.target.value)
                            }} required></textarea>
                        <label for="message"><i class="fa fa-comment"></i> Your Message</label>
                    </div>    
                    
                    
                   <button type="submit" onclick="openPopup()" id="sendQueryBtn">Send message</button>
                </form>
                <div class="popup" id="popup">
                    <img src="./images/tick1.png" />
                    <h2>Message succesfully sent!</h2>
                    <button type="button" onclick="closePopup()">OK</button>
                </div>
            </div>
           
    </section>
    <footer>
        <p>@ copyrights belong to me!</p>
        
    </footer>
    </div>
    </div>
  )
}


