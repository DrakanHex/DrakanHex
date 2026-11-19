ServerEvents.recipes(event => {
    event.remove({ id: 'hexcasting:focus_rotated' })
    event.remove({ id: 'hexcasting:lens' })
    event.recipes.gtceu.alloy_smelter('lens')
        .itemInputs( '1x gtceu:amethyst_lens', '1x gtceu:glass_lens' )
        .itemOutputs( 'hexcasting:lens' )
        .duration(100)
        .EUt(30)
}) 