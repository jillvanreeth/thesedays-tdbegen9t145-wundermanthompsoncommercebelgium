<?php snippet('inc/head') ?>
<?php snippet('inc/header') ?>

<main>
	
	<?php foreach($page->children() as $section){
	    snippet($section->intendedTemplate(), array('section' => $section));
	} ?>
  
</main>

<?php snippet('inc/footer') ?>
<?php snippet('inc/foot') ?>