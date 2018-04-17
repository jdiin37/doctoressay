
function renderMain(account){
    const islogin = (
            <div>
                <TopToolBar 
                account={account}
                visible />
                <LeftContainer visible />
                <UserGithub source="https://api.github.com/users/facebook" />
                <br/>
                <ViewList visible/>
                <NewsBlock  visible />
                <NewsBlock  visible />
            </div>
      );
    ReactDOM.render(
            islogin,
            document.getElementById('root')
    );  
}


function renderLogin(){
    const notlogin =(
            <LoginPage />
           );
    
    ReactDOM.render(
            notlogin,
            document.getElementById('root')
    );    
}

renderLogin();
