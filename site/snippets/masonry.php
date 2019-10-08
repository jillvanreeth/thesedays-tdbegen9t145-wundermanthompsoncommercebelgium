<?php 

	$total = count(page('masonry')->children()->listed());
	
?>

<section id="<?= page('masonry')->title()->slug()?>" class="masonry">
	<div class="masonry__inner" id="test">
				
		<div class="masonry__col">
			<?php $index = 0; ?>
			<?php foreach(page('masonry')->children()->listed() as $item): ?>
				
				<?php if($index <= $total / 2): snippet($item->intendedTemplate(), array('item' => $item)); endif; ?>
				
			<?php $index++; ?>
			<?php endforeach; ?>
		</div>

		<div class="masonry__col">
			<?php $index = 0; ?>
			<?php foreach(page('masonry')->children()->listed() as $item): ?>
				
				<?php if($index > $total / 2): snippet($item->intendedTemplate(), array('item' => $item)); endif; ?>
				
			<?php $index++; ?>
			<?php endforeach; ?>
		</div>
		
	</div>	
</section>