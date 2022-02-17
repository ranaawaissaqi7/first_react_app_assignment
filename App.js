import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <div className="container-fluid saqi bg-dark">
        <h1>Title of a Longer</h1>
        <h2>Featured Blog Post</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
        Ut non ullamcorper augue. Integer id efficitur mauris.<br/>
        Aliquam vulputate eleifend magna, in fringilla est pellentesque eu.<br/><br/>
        <h6>Continue Reading.....</h6><br/><br/>
        </p>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3">
            <h6 className="blue">Word</h6>
            <h4>Featured Blog Post</h4>
            <p>Nov 12</p>
            <p>Lorem ipsum dolor sit amet,<br/>
            consectetur adipiscing elit.<br/>
            magna.
            </p><br/>
            <a href="#"><h6>Continue Reading.....</h6></a>
          </div>
          <div className="col-md-2 bg-dark saqi center" >
            <h4>Thumbil</h4>
          </div>
          <div className="col-md-3">
            <h6 className="green">Design</h6>
            <h4>Post of Title</h4>
            <p>Nov 13</p>
            <p>Lorem ipsum dolor sit amet,<br/>
            consectetur adipiscing elit.<br/>
            magna.
            </p><br/>
            <a href="#"><h6>Continue Reading.....</h6></a>
          </div>
          <div className="col-md-2 bg-dark saqi center" >
            <h4>Thumbil</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h4>Featured the FireHouse</h4>
            <hr/>
            <h2>Sample The Blog Post</h2>
            <p>juanvery 1,2014 by <span className="blue">Mars</span></p><br/>
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut non ullamcorper augue. Integer id efficitur mauris. Nullam fringilla</p><br/>
            <p>Lorem ipsum dolor sit amet, <span className="blue">consectetur adipiscing elit.</span> Ut non ullamcorper augue. Integer id efficitur mauris. Nullam fringilla egestas tellus at iaculis. Duis finibus accumsan mi quis blandit. Aliquam vulputate eleifend magna, in fringilla est.<br/><br/>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut non ullamcorper augue. Integer id efficitur mauris. Nullam fringilla.<br/><br/>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut non ullamcorper augue. Integer id efficitur mauris. Nullam fringilla.<br/><br/>
            </p>
            <h2>Heading</h2>
            <p>
            The direction into which a seagoing or airborne vessel's bow is pointing (apparent heading) and/or the direction into which it is actually moving relative to the ground (true heading)
            </p>
            <h2>Sub Heading</h2>
            <p>
            A sub-heading is a mini-headline given to a subsection or paragraph within a main piece of writing. They're smaller than the main heading, but larger than the paragraph text of the article.
            </p>
            <h4>How to Write Interesting Sub-Headings</h4>
            <p>
            When writing a sub-heading, it's important to know what content will be written in the paragraph underneath. Establish what the section is about and what the most important part of the paragraph is.
            </p>
            <ul>
              <li>Useful - To benefit the reader;</li>
              <li>Unique - To share information that the reader may not be aware of;</li>
              <li>Ultra-Specific - To ensure the reader knows what is being said;</li>
              <li>Urgent - To get the reader's attention.</li>
            </ul>
            <p>The Most Delicious Pastries in the World</p>
            <ol>
              <li>Paris' Best Croissants (1-2)</li>
              <li>Japan's Mouthwatering Mochi (3-4)</li>
              <li>Dreamy Brazilian Sonho (5-6)</li>
              
            </ol>
            <p>Sub-headings are there to help break up a text and make it more</p>
            <h2>An Other Blog Post</h2>
            <p>December 13,2013 by <span className="blue">Jocks</span></p>
            <p>Lorem ipsum dolor sit amet, <span className="blue">consectetur adipiscing elit.</span> Ut non ullamcorper augue. Integer id efficitur mauris. Nullam fringilla egestas tellus at iaculis. Duis finibus accumsan mi quis blandit. Aliquam vulputate eleifend magna, in fringilla est.<br/><br/>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut non ullamcorper augue. Integer id efficitur mauris. Nullam fringilla<br/><br/>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut non ullamcorper augue. Integer id efficitur mauris. Nullam fringilla<br/><br/>
            Generally, however, sub-headings should be used to break up sections of a text. If the next paragraph moves onto a completely different subject, then it would be a good idea to use a sub-heading above it to signal that you're moving onto something else.
            </p>
            <h2>New Featured</h2>
            <p>December 5,2015 by <span className="blue">Charlis</span></p>
            <p>
              The thought process is similar to thinking about when to start a new paragraph, but you don't always need a sub-heading for every new paragraph. Sub-headings should group together linked paragraphs and separate the general sections of a piece of work.</p>

              <ul>
                <li>The main purpose of sub-headings is to grab the reader's attention.</li>
                <li>Some sub-headings are purely informational. If the reader is looking.</li>
                <li>You might also find sub-headings listed on the contents page of a non.</li>
              </ul>
              <p>The thought process is similar to thinking about when to start a new paragraph, but you don't always need a sub-heading for every new paragraph. Sub-headings should.</p>

              <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut non ullamcorper augue.
              </p><br/><br/>
              <button type="button" className="btn btn-outline-primary butun">Primary</button>
              <button type="button" className="btn btn-outline-dark ms-3 butun">dark</button>
          </div>
          <div className="col-md-4 mt-3">
            <h2>About</h2>
            <p>Cards assume no specific width to start, so they’ll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.</p>
            <h2 className="mt-5">Archives</h2>
            <p className="blue">
            January 2010, <br/>
            February 2011, <br/>
            March 2012,<br/>
            April 2013,<br/>
            May 2014,<br/>
            June 2015,<br/>
            July 2016,<br/>
            August 2017,<br/>
            September 2018,<br/>
            October 2019,<br/>
            November 2020,<br/>
            December 2021,<br/>
            </p>
            <h2 className="mt-5">Elsewhere</h2>
            <h6 className="blue">Github</h6>
            <h6 className="blue">Facebook</h6>
            <h6 className="blue">Twitter</h6>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
