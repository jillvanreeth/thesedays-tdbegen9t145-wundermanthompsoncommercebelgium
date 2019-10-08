<?php  $footer = page('footer-nav'); ?>

<nav class="footerNav">
	<ul class="footerNav__list">
			
		<?php foreach($footer->items()->toStructure() as $item): ?>
			<li class="footerNav__list__item">
				<a href="<?= $item->link() ?>" target="_blank" class="footerNav__link" onclick="dataLayer.push({'event': 'wundermancommerceEvent', 'dlCategory':'Link click', 'dlAction':'<?= $item->name() ?>', 'dlLabel': 'Bottom'});"><?= $item->name() ?></a>
			</li>
		<?php endforeach; ?>

	</ul>
</nav>