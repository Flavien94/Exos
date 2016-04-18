<?php
$titre="";
$description="";
$dateDebut = date("d/m/Y", time());
$dateFin = date("d/m/Y", time());
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Ajouter un événement</h1>

      <form method="post" action="../traitement/ajoutevent.php">
      	<table id="tabAjoutEvent">
          	<tr>
              	<td><label>Du : <input type="text" name="debut" value="<?php echo $dateDebut ?>" /></label></td>
                  <td><label>Au : <input type="text" name="fin" value="<?php echo $dateFin; ?>" /></label></td>
              </tr>
         		<tr>
         			<td colspan="2"><br/>
                  	<label for="titre">Titre de l'événement :</label><br/>
         				<input type="text" name="titre" id="titre" size="30" value="<?php echo $titre ?>" /><br/><br/>
                  </td>
         		</tr>
            <tr>
         			<td colspan="2"><br/>
                  	<label for="titre">Niveau du stagiaire:</label><br/>
         				<input type="number" name="titre" id="titre" size="30" value="<?php echo $titre ?>" /><br/><br/>
                  </td>
         		</tr>
              <tr>
              	<td colspan="2">
         				<label for="description">Description de l'événement :</label><br/>
         				<textarea rows="10" cols="50" id="description" name="description"><?php echo $description ?></textarea>
                  </td>
              </tr>
              <tr>
              	<td colspan="2"><input type="submit" name="envoi" value="Envoyer"/></td>
              </tr>
         </table>
      </form>
  </body>
</html>
