CREATE TABLE `evenements` (
`id_evenement` INT NOT NULL ,
`titre_evenement` VARCHAR( 255 ) NOT NULL ,
`contenu_evenement` TEXT NOT NULL ,
PRIMARY KEY ( `id_evenement` )
) ENGINE = innodb;
