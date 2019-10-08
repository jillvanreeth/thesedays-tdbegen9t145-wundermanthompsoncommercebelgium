<?php 

	$index = 0; 
	$total = 0;

	foreach($page->children() as $item): 
		($item->title_toggle()->isNotEmpty() && $item->title_toggle()->value() == 'true') && $total++;
	endforeach;

?>

<nav class="mainNav">
	<ul class="mainNav__list">
		<?php foreach($page->children() as $item): ?>
			
			<?php if($item->title_toggle()->isNotEmpty() && $item->title_toggle()->value() == 'true'): ?>
				<li class="mainNav__listitem<?= e($index === $total / 2, ' listitem--push', null) ?>">
					 <a href="#<?= $item->title()->slug() ?>" class="mainNav__link" onclick="dataLayer.push({'event': 'wundermancommerceEvent', 'dlCategory':'Anchor navigation', 'dlAction': '<?= $item->title() ?>', 'dlLabel': 'Top '});"><?= $item->title() ?></a>
				</li>
				<?php $index++; ?>
			<?php endif; ?>
		
	 	<?php endforeach ?>
	</ul>
</nav>