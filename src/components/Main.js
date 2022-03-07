import styled from "styled-components";

const Main = (props) => {
  return ( <Container>
      <ShareBox>Share
      <div>
        <img src="/images/user.svg" alt=""/>
        <button>Start a post</button>
      </div>
      <div>
    
      <button>
            <img src="/images/photo-icon.png" className="post-icon" alt="" />
            <span>Photo</span>
        </button>

        <button>
             <img src="/images/video-icon.png" className="post-icon" alt="" />
            <span>Video</span>
        </button>

        <button>
             <img src="/images/event-icon.png" className="post-icon" alt="" />
            <span>Event</span>
        </button>

        <button>
             <img src="/images/article-icon.png" className="post-icon" alt="" />
            <span>Write article</span>
        </button>
         </div>
                    
      
      </ShareBox>
  </Container>
  )
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%)
`;

const ShareBox = styled(CommonCard)`
 display: flex;
 flex-direction: column;
 color: #958b95;
 margin: 0px 0px 8px;
 background: white;
 div{
     button{
         outline: none ;
         color: rgba(0,0,0,0.6);
         font-size: 14px ;
         line-height: 1.5;
         min-height: 48px ;
         background: transparent;
         border: none ;
         display: flex;
         align-items: center;
         font-weight: 600;
         &:hover {
                background-color: rgba(0,0,0,0.07);
                border-radius: 6px;
            }
     }
     .post-space {
            box-shadow: 1px 1px 2px 1px rgba(159,156,156,0.75);
        }

        .post-icon {
            width: 27px;
        }
     &:first-child{
         display: flex;
         align-items: center ;
         padding:8px 16px 0px 16px;
         img{
             width: 20px;
             border-radius: 50%;
             margin-right:  8px;
         }
         button{
             margin: 4px 0;
             flex-grow: 1 ;
             border-radius: 35px;
            padding-left: 16px; 
            border: 1px solid rgba(0,0,0,0.15);
            background-color: white ;
            text-align: left;
         }
     }
     &:nth-child(2){
         display:flex;
         flex-wrap: wrap;
         justify-content: space-around ;
         padding-bottom: 4px;

         button{
             img{
                margin: 1px 4px 0px -2px;
             }
             span {
                    color: #70b5f9;
                }
         }
     }
 }
 `;
export default Main;