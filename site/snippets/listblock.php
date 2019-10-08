<section id="<?= $section->title()->slug() ?>" class="listblock">
	<div class="listblock__inner">

		<?php if($section->title_toggle()->value() == 'true'): ?>
			<h2 class="listblock__title"><?= $section->title() ?></h2>
		<?php endif; ?>
		
		<div class="listblock__items">
		
			<?php foreach($section->items()->toStructure() as $item): ?>
				
				<?php 

					$highlightColor = $item->highlight_color()->isNotEmpty() ?  'cp--pairing-'.strtolower($item->highlight_color()->text()) : ''; 

					$blockColor = $item->background_color()->isNotEmpty() ? 'bgc--'.strtolower($item->background_color()->text()) : '';

					$fontColor = $item->font_color()->isNotEmpty() ? 'fc--'.strtolower($item->font_color()->text()) : '';
				?>

				<div class="listblock__item <?= e($item->font_color()->isNotEmpty(), $fontColor) ?> <?php echo $blockColor; ?>">
					<div class="listblock__item__inner  <?= e($item->background_color()->isNotEmpty(), 'extra-spacing') ?>">
						<header class="listblock__header">
							<?= e($item->highlighted_subtitle()->isNotEmpty(), '<h3 class="listblock__subtitle '.$highlightColor.' ">'.$item->highlighted_subtitle().'</h3>'); ?>
							<?= e($item->highlighted_subtitle()->isNotEmpty(), '<h3 class="listblock__subtitle">'.$item->subtitle().'</h3>'); ?>
						</header>
					
						<div class="listblock__content">
							<div class="listblock__theBody">
								<?= $item->description() ?>
							</div>

							<?php if($item->cta_label()->isNotEmpty() && $item->cta_toggle()->value() == 'true'): ?>
								<div class="listblock__cta">
									<a class="button button--<?php echo $highlightColor; ?>" href="<?= $item->cta_url() ?>" target="_blank">
										<span class="button__label"><?= $item->cta_label() ?></span>
									</a>
								</div>
							<?php endif; ?>

						</div>
					</div>
				</div>

			<?php endforeach; ?>

		</div>

	</div>
</section>


