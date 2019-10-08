<section id="<?= $section->title()->slug() ?>" class="articles">
	<div class="articles__inner">
			
		<?php if($section->title_toggle()->value() == 'true'): ?>
			<h2 class="articles__title"><?= $section->title() ?></h2>
		<?php endif; ?>

		<div class="articles__items">
			<?php $index = 1; ?>
			<?php foreach($section->items()->toStructure() as $item): ?>
				
				<article class="articles__item">
					<div class="articles__item__inner">
						
						<div class="articles__itemWrap">
							<div class="articles__item__visual">
								<figure class="articles__item__theVisual">
									<img src="<?= $item->visual()->toFile()->resize(400)->url() ?>" alt="" />
								</figure>		
							</div>
							
							<div class="articles__item__content">
								
								<h5 class="articles__item__title"><?= $item->title() ?></h5>
								<?php $title = str_replace('\'', '', $item->title()); ?>
								<a href="<?= $item->linkurl() ?>" target="_blank"class="articles__item__link" onclick="dataLayer.push({'event': 'wundermancommerceEvent', 'dlCategory':'Trending click', 'dlAction': '<?= preg_replace('/[^a-zA-Z0-9\s]/', '', $item->title()) ?>', 'dlLabel': 'position-<?= $index ?>'})"><?= $item->linklabel() ?></a>
							</div>	
						</div>

					</div>
				</article>
				<?php $index++; ?>
			<?php endforeach; ?>
		</div>

	</div>
</section>