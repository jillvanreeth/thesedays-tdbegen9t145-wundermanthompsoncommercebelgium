<?php 

	$backgroundImage = $item->background_image()->isNotEmpty() && $item->background_image_toggle() == 'true' && $item->background_image_size_toggle()->value() === 'true' ? 'style="background: url('.$item->background_image()->toFile()->url().') no-repeat center/cover"' : false;

	$backgroundColor = $item->background_color()->isNotEmpty() ? strtolower($item->background_color()->value()) : 'blue';

	$fontColor = $item->font_color()->isNotEmpty() ? 'fc--'.strtolower($item->font_color()->text()) : 'fc--white';

?>

<article class="masonryitem">
	<div class="masonryitem__inner">
		
		<div class="masonryitem__wrap <?= e($backgroundColor, 'bgc--'.$backgroundColor)?>" <?= e($backgroundImage, $backgroundImage) ?>>
			
			<div class="masonryitem__in">
				<div class="masonryitem__content <?= e($fontColor, $fontColor) ?>">
				 	<?php if($item->title_toggle()->value() == 'true'): ?>
				 		<h3 class="masonryitem__content__title"><?= $item->title() ?></h3>
				 	<?php endif; ?>

				 	<div class="masonryitem__theBody">
				 		<?= $item->description()->kirbytext() ?>
					</div>

					<?php if($item->cta_toggle()->value() == 'true' && $item->cta_label()->isNotEmpty()): ?>
						<div class="masonryitem__cta">
							<a class="button button--outlined" href="<?= $item->cta_url() ?>" target="_blank" onclick="dataLayer.push({'event': 'wundermancommerceEvent', 'dlCategory':'Button click', 'dlAction': '<?= preg_replace('/[^a-zA-Z0-9\s]/', '',$item->title()) ?>', 'dlLabel': '<?= $item->cta_label() ?>'});">
								<span class="button__label"><?= $item->cta_label() ?></span>
							</a>
						</div>
					<?php endif; ?>
				</div>
			</div>	
			
			<?php if($item->background_image()->isNotEmpty() 
				&& $item->background_image_toggle() == 'true' 
				&& $item->background_image_size_toggle()->value() == 'false'): 
			?>
				<div class="masonryitem__visual">
					<figure class="masonryitem__theVisual">
						<img src="<?= $item->background_image()->toFile()->resize(400)->url() ?>" alt="" />
					</figure>
				</div>
			<?php endif; ?>

		</div>

	</div>
</article>