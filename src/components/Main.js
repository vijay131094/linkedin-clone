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
      <div>
          <Article>
            <SharedActor>
            <a>
                <img src="/images/user.svg" alt=""/>
                <div>
                    <span>Title</span>
                    <span>Info</span>
                    <span>Datr</span>
                </div>
            </a>
            <button>
                <img src="/images/ellipsis.png" alt=""/>
            </button>
            </SharedActor>
            <Description>Description</Description>
            <SharedImage>
                <a>
                    <img src="/images/shared-img.png" alt=""/>
                </a>
            </SharedImage>
            <SocialCounts>
                <button>
                    <img src="images/like-icon.png" alt="000" />
                    <img src="images/clap-icon.png" alt="" />
                    <span>62</span>
                </button>
                
     
                 <a>Comments</a>
                        
            </SocialCounts>

                <SocialActions>
                    <button>
                        <i class="far fa-thumbs-up"></i>
                    <span>Like</span>
                    </button>
                    <button>
                    <i class="far fa-comment"></i>
                    <span>Comment</span>
                    </button>
                    <button>
                     <i class="fas fa-share"></i>
                    <span>Share</span>
                    </button>
                    <button>
                    <i class="fab fa-telegram-plane"></i>
                    <span>Send</span>
                    </button>
                </SocialActions>

          </Article>
      </div>

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

 const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;`;

const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;

    a {
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img {
            width: 48px;
            height: 48px;
        }

        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;

            span {
                text-align: left;

                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                }

                &:nth-child(n+1) {
                    font-size: 12px;
                    color: rgba(0,0,0,0.6);
                }
            }
        }
    }

    button {
        position: absolute;
        right: 12px;
        outline: none;
        border: none;
        top: 0;
        background: transparent;
    }
`;
const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0,0,0,0.9);
    font-size: 14px;
    text-align: left;
`;

const SharedImage = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #f9fafb;

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;
const SocialCounts = styled.ul`
    line-height: 100%;
    display: flex;
    align-items: flex-start;
    overflow: auto;
    list-style: none;
    margin: 0 16px;
    padding: 8px 0;
    border-bottom: 1px solid #e9e5df;

    li {
        margin-right: 5px;
        font-size: 12px;

        button {
            display: flex;
            border: none;
            background: #fff;
        }
    }

    img {
        width: 18px;
    }
`;

const SocialActions = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0;
    min-height: 40px;
    padding: 4px 8px;

    button {
        display: inline-flex;
        align-items: center;
        padding: 8px;
        color: #0a66c2;
        border: none;
        background-color: #fff;

        @media (min-width: 768px) {
            span {
                margin-left: 8px;
            }
        }
    }
`;


export default Main;