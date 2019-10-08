<section id="<?= $section->title()->slug() ?>" class="contact">
	<div class="contact__inner">
	
		<h2 class="contact__title"><?= $section->title() ?></h2>
	
		<div class="contact__items">
			<?php foreach($section->items()->toStructure() as $item): ?>
				 
				<article class="contact__item">
					<div class="contact__item__inner">
						<?php if($item->visual()->isNotEmpty()): ?>
						<figure class="contact__item__visual">
							<img src="<?= $item->visual()->toFile()->resize(400)->url() ?>" alt="" />
						</figure>		
						<?php endif; ?>			
						
						<div class="contact__content">
							<h4 class="contact__item__title"><?= $item->contactname() ?></h4>
							<p><?= $item->jobtitle() ?></p>
							
							<a href="<?= $item->linkedinpage() ?>" target="_blank" class="contact__icon" onclick="dataLayer.push({'event': 'wundermancommerceEvent', 'dlCategory':'Social click', 'dlAction': 'LinkedIn - <?= preg_replace('/[^a-zA-Z0-9\s]/', '', $item->contactname()) ?>', 'dlLabel':''});">
								<?php include('assets/svg/linkedin--squared.svg'); ?>
							</a>
						</div>
					</div>
				</article>

			<?php endforeach ?>
		</div>

	</div>
</section>