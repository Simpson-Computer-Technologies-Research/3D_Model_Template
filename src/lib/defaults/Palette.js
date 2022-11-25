import { THREE } from "$lib/Imports.js";

// Light Mode Phone Wallpapers
export const HOME_WALLPAPER = new THREE.TextureLoader().load("./textures/wallpaper.png");

// Dark Mode Phone Wallpapers
export const DARK_HOME_WALLPAPER = new THREE.TextureLoader().load("./textures/wallpaper.png");

// To check whether the wallpaper is already changed
export let IsWallpaperChanged = false;

// Set the current wallpaper
export let Wallpapers = {
    Home: HOME_WALLPAPER
};

// Convert the color to light mode
export const ToLightMode = () => {
    Wallpapers = {
        Home: HOME_WALLPAPER,
    }
}

// Convert the color to dark mode
export const ToDarkMode = () => {
    Wallpapers = {
        Home: DARK_HOME_WALLPAPER,
    }
}

// Phone Wallpaper Manipulation
export const UpdatePhoneWallpaper = (model, wallpaper) => {
	model.traverse((obj) => {
		if (obj.name == "Body_Wallpaper_0") {
			obj.material.map = wallpaper;
			obj.material.needsUpdate = true;
		};
	});
    // Update the wallpaper change status
    IsWallpaperChanged = !IsWallpaperChanged;

    // Return the updated model
	return model;
}
