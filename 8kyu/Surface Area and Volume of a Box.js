// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
    const volume = width * height * depth
    const surface = (width * height) * 2 + (width * depth) * 2 + (depth * height) * 2
    return [surface, volume]
}