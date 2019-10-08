<?php  $social = page('social-media'); ?>

<nav class="social">
	<ul class="social__list">
			
		<?php foreach($social->items()->toStructure() as $item): ?>
			<li class="social__list__item">
				<a href="<?= $item->url() ?>" target="_blank" class="social__link" onclick="dataLayer.push({'event': 'wundermancommerceEvent', 'dlCategory':'Social click', 'dlAction':'<?= $item->category() ?>', 'dlLabel': 'Bottom'});"><?php include('assets/svg/'. strtolower($item->category()) .'.svg'); ?></a>
			</li>
		<?php endforeach; ?>

	</ul>
</nav>