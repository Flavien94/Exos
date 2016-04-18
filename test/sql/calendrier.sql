CREATE TABLE `calendrier` (
`id_calendrier` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`jour_evenement` VARCHAR( 2 ) NOT NULL ,
`mois_evenement` VARCHAR( 2 ) NOT NULL ,
`annee_evenement` VARCHAR( 4 ) NOT NULL ,
`id_evenement` INT NOT NULL
) ENGINE = innodb;
