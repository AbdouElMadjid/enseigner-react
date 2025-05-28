function ExplicBinenue() {
  return (
    <div>
        <h2>Ce-ci est l'explication de la procedure de création d'un composante react !</h2>
        <p>
            <pre><span> </span> <span> </span><span> </span><span> </span>
            Pour créer un composant React, il suffit de créer un fichier JavaScript dans le dossier <code>src/components/</code> de votre projet.
            <br></br>
           <span> </span> <span> </span><span> </span><span> </span> Par exemple, vous pouvez créer un fichier nommé <code>Bienvenue.js</code> dans ce dossier 
            comme vous pouvez le voir dans l'arborescence ci-dessous :
            </pre>
            <code>
                <pre>
                    <span> </span> <span> </span><span> </span> enseigner-react/ <br />
                    <span> </span> <span> </span><span> </span> <span> </span> ├── src/ <br />
                    <span> </span> <span> </span><span> </span> <span> </span> │   ├── components/<br />
                    <span> </span> <span> </span><span> </span> <span> </span> │   │   └── Bienvenue.js<br />
                </pre>
            </code> 
        </p>
    <pre><span> </span> <span> </span><span> </span><span> </span>
        <p> 
            ensuite dans le fichier <code>Bienvenue.js</code> vous créer un composant React en utilisant une 
            fonction JavaScript qui retourne du code html ou tout cec que ous voulez. 
            <br></br><span> </span> <span> </span><span> </span><span> </span>Puis ensuite vous l'exportez à in qu'il soit accessible et utilisable par les autres fichiers de votre projet.
        </p>
        </pre>
        <   p><span> </span> <span> </span>
            Voici un exemple de code pour le composant <code>Bienvenue.js</code> :
            code
            <code>
                <pre><span> </span> <span> </span>
                    <span> </span> <span> </span>import React from 'react';<br />
                    <br />
                    <span> </span> <span> </span>function Bienvenue() &#123;<br />
                    <span> </span> <span> </span>    <span> </span> <span> </span>return ( <br />
                    <span> </span> <span> </span>    <span> </span> <span> </span>    &nbsp;&nbsp;&lt;div&gt;<br />
                    <span> </span> <span> </span>    <span> </span> <span> </span>    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Bienvenue dans mon premier composant React !&lt;/h2&gt;<br />
                    <span> </span> <span> </span>    <span> </span> <span> </span>    &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;C'est Simple non 🎉&lt;/p&gt;<br />
                    <span> </span> <span> </span>    <span> </span> <span> </span>    &nbsp;&nbsp;&lt;/div&gt;<br />
                    <span> </span> <span> </span>    );<br />
                    <span> </span> <span> </span>&#125;<br />
                    <span> </span> <span> </span><br />
                <span> </span> <span> </span>    <span> </span> <span> </span>export default Bienvenue;<br />
                </pre>              
                </code>
                </p>
        <pre>
        <p>
        
        <span> </span> <span> </span>    <span> </span> <span> </span>
        Ensuite, vous pouvez utiliser ce composant dans votre application en l'importation dans le fichier <code>App.js</code> et en l'affichant dans le rendu de votre application.
        </p>
        <span> </span> <span> </span>    <span> </span> <span> </span>
        Voici un exemple de code pour le fichier <code>App.js</code> :
        </pre>
        <code>
            <pre>
            <span> </span> <span> </span>    <span> </span> <span> </span>import React from 'react';<br />
            <span> </span> <span> </span>    <span> </span> <span> </span>import Bienvenue from './components/Bienvenue';<br />
            <span> </span> <span> </span>    <span> </span> <span> </span><br />
            <span> </span> <span> </span>    <span> </span> <span> </span>function App() &#123;<br />
            <span> </span> <span> </span>    <span> </span> <span> </span>    return ( <br />
            <span> </span> <span> </span>    <span> </span> <span> </span>    <span> </span> <span> </span>    <span> </span> <span> </span>&nbsp;&nbsp;&lt;div&gt;<br />
                    <span> </span> <span> </span>    <span> </span> <span> </span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Bienvenue /&gt;<br />
                    <span> </span> <span> </span>    <span> </span> <span> </span>&nbsp;&nbsp;&lt;/div&gt;<br />
                    <span> </span> <span> </span>);<br />
            <span> </span> <span> </span>    <span> </span> <span> </span>&#125;<br />
                <span> </span> <span> </span><br />
            <span> </span> <span> </span>    <span> </span> <span> </span>export default App;<br />
            </pre>
        </code> 
        <p>C'est Simple non 🎉</p>
    </div>
  );
}

export default ExplicBinenue;