"use strict"

/*function initStats() {
	let stats = new Stats();
	stats.setMode(0);
	stats.domElement.style.position = "absolute";
	stats.domElement.style.left = "0px";
	stats.domElement.style.top = "0px";
	document.body.append(stats.domElement);
	return stats;
}*/

function main() {
	
	//let stats = initStats();
	
	const canvas = document.querySelector('#webgl-output');
	let renderer = new THREE.WebGLRenderer({canvas});
	
	let scene = new THREE.Scene();

	let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000);

	renderer.setClearColor(0xEEEEEE, 1.0);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMapEnabled = true;

	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 5000;
	camera.lookAt(scene.position);

	let ambientLight = new THREE.AmbientLight(0x0C0C0C);
	scene.add(ambientLight);

	let spotLight = new THREE.SpotLight(0xFFFFFF);
	spotLight.position.set(-4000, 3000, 5000);
	spotLight.castShadow = true;
	scene.add(spotLight);

	let controls_m = new THREE.OrbitControls(camera, renderer.domElement);

	//document.body.append(renderer.domElement);

	render();

	function render() {
		requestAnimationFrame(render);
		//stats.update();
		controls_m.update();
		renderer.render(scene, camera);
	}

//=================================================================================================
	
	let dTexture, dMaterial;
	
	let loader = new THREE.TextureLoader();
	loader.load(
		//путь или URL к файлу
		'./textures/wood_3025.png',
		//'https://junior3d.ru/texture/%D0%94%D0%B5%D1%80%D0%B5%D0%B2%D0%BE/%D0%9D%D0%BE%D0%B2%D0%BE%D0%B5%D0%94%D0%B5%D1%80%D0%B5%D0%B2%D0%BE/%D0%BD%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE_1.jpg',
		//метод, который будет вызван после завершения загрузки, аргументом будет загруженная текстура
		function (texture) {
			dMaterial = new THREE.MeshPhongMaterial({map: texture})
		},
		//метод, который будет вызываться во время загрузки, аргументом будет экземпляр XMLHttpRequest, который содержит "всего" и "загруженные байты"
		undefined,
		//метод, который будет вызываться при загрузке ошибок
		function (err) {
			dMaterial = new THREE.MeshLambertMaterial({color: 0xDEDE94});
			console.error("Ошибка загрузки текстуры");
		}
	);
	
	//dTexture.wrapS = THREE.RepeatWrapping;
    //dTexture.wrapT = THREE.RepeatWrapping;
    //texture.magFilter = THREE.NearestFilter;
    //dTexture.repeat.set(3, 3);
	//texture.offset.set(1, 1);
	//texture.anisotropy = 300;*/

	dMaterial = new THREE.MeshLambertMaterial({color: 0xDEDE94});

	let xc = -500;
	let yc = -1101;
	let zc = -300;
	
	let dnoGeometry = new THREE.CubeGeometry(1200, 16, 600);
	let plinbokGeometry = new THREE.CubeGeometry(16, 70, 545);
	let plinGeometry = new THREE.CubeGeometry(1086, 70, 16);
	let bokGeometry = new THREE.CubeGeometry(16, 2100, 600);
	let peregGeometry = new THREE.CubeGeometry(16, 2100, 500);
	let polkaGeometry = new THREE.CubeGeometry(576, 16, 500);
	let zsGeometry = new THREE.CubeGeometry(596, 2128, 4);
	
	let dno = new THREE.Mesh(dnoGeometry, dMaterial);
	dno.castShadow = true;
	dno.receiveShadow  = true;
	dno.position.x = 600 + xc;
	dno.position.y = 8+70 + yc;
	dno.position.z = 300 + zc;
	scene.add(dno);
	
	let plin_1 = new THREE.Mesh(plinbokGeometry, dMaterial);
	plin_1.castShadow = true;
	plin_1.receiveShadow  = true;
	plin_1.position.x = 8+40 + xc;
	plin_1.position.y = 35 + yc;
	plin_1.position.z = 272.5+50 + zc;
	scene.add(plin_1);
	
	let plin_2 = new THREE.Mesh(plinbokGeometry, dMaterial);
	plin_2.castShadow = true;
	plin_2.receiveShadow  = true;
	plin_2.position.x = 8+1142 + xc;
	plin_2.position.y = 35 + yc;
	plin_2.position.z = 272.5+50 + zc;
	scene.add(plin_2);
	
	let plin_3 = new THREE.Mesh(plinGeometry, dMaterial);
	plin_3.castShadow = true;
	plin_3.receiveShadow  = true;
	plin_3.position.x = 543+56 + xc;
	plin_3.position.y = 35 + yc;
	plin_3.position.z = 8+61 + zc;
	scene.add(plin_3);
	
	let plin_4 = new THREE.Mesh(plinGeometry, dMaterial);
	plin_4.castShadow = true;
	plin_4.receiveShadow  = true;
	plin_4.position.x = 543+56 + xc;
	plin_4.position.y = 35 + yc;
	plin_4.position.z = 8+568 + zc;
	scene.add(plin_4);
	
	let bok_1 = new THREE.Mesh(bokGeometry, dMaterial);
	bok_1.castShadow = true;
	bok_1.receiveShadow  = true;
	bok_1.position.x = 8 + xc;
	bok_1.position.y = 1050+86 + yc;
	bok_1.position.z = 300 + zc;
	scene.add(bok_1);
	
	let bok_2 = new THREE.Mesh(bokGeometry, dMaterial);
	bok_2.castShadow = true;
	bok_2.receiveShadow  = true;
	bok_2.position.x = 8+1184 + xc;
	bok_2.position.y = 1050+86 + yc;
	bok_2.position.z = 300 + zc;
	scene.add(bok_2);
	
	let krisha = new THREE.Mesh(dnoGeometry, dMaterial);
	krisha.castShadow = true;
	krisha.receiveShadow  = true;
	krisha.position.x = 600 + xc;
	krisha.position.y = 8+2186 + yc;
	krisha.position.z = 300 + zc;
	scene.add(krisha);
	
	let pereg = new THREE.Mesh(peregGeometry, dMaterial);
	pereg.castShadow = true;
	pereg.receiveShadow  = true;
	pereg.position.x = 8+592 + xc;
	pereg.position.y = 1050+86 + yc;
	pereg.position.z = 250 + zc;
	scene.add(pereg);
	
	let polka_1 = new THREE.Mesh(polkaGeometry, dMaterial);
	polka_1.castShadow = true;
	polka_1.receiveShadow  = true;
	polka_1.position.x = 288+16 + xc;
	polka_1.position.y = 8+428 + yc;
	polka_1.position.z = 250 + zc;
	scene.add(polka_1);
	
	let polka_2 = new THREE.Mesh(polkaGeometry, dMaterial);
	polka_2.castShadow = true;
	polka_2.receiveShadow  = true;
	polka_2.position.x = 288+16 + xc;
	polka_2.position.y = 8+778 + yc;
	polka_2.position.z = 250 + zc;
	scene.add(polka_2);
	
	let polka_3 = new THREE.Mesh(polkaGeometry, dMaterial);
	polka_3.castShadow = true;
	polka_3.receiveShadow  = true;
	polka_3.position.x = 288+16 + xc;
	polka_3.position.y = 8+1128 + yc;
	polka_3.position.z = 250 + zc;
	scene.add(polka_3);
	
	let polka_4 = new THREE.Mesh(polkaGeometry, dMaterial);
	polka_4.castShadow = true;
	polka_4.receiveShadow  = true;
	polka_4.position.x = 288+16 + xc;
	polka_4.position.y = 8+1478 + yc;
	polka_4.position.z = 250 + zc;
	scene.add(polka_4);
	
	let polka_5 = new THREE.Mesh(polkaGeometry, dMaterial);
	polka_5.castShadow = true;
	polka_5.receiveShadow  = true;
	polka_5.position.x = 288+16 + xc;
	polka_5.position.y = 8+1828 + yc;
	polka_5.position.z = 250 + zc;
	scene.add(polka_5);
	
	let polka_6 = new THREE.Mesh(polkaGeometry, dMaterial);
	polka_6.castShadow = true;
	polka_6.receiveShadow  = true;
	polka_6.position.x = 288+608 + xc;
	polka_6.position.y = 8+428 + yc;
	polka_6.position.z = 250 + zc;
	scene.add(polka_6);
	
	let polka_7 = new THREE.Mesh(polkaGeometry, dMaterial);
	polka_7.castShadow = true;
	polka_7.receiveShadow  = true;
	polka_7.position.x = 288+608 + xc;
	polka_7.position.y = 8+1828 + yc;
	polka_7.position.z = 250 + zc;
	scene.add(polka_7);
	
	let zs_1 = new THREE.Mesh(zsGeometry, dMaterial);
	zs_1.castShadow = true;
	zs_1.receiveShadow  = true;
	zs_1.position.x = 298+2 + xc;
	zs_1.position.y = 1064+72 + yc;
	zs_1.position.z = -2 + zc;
	scene.add(zs_1);
	
	let zs_2 = new THREE.Mesh(zsGeometry, dMaterial);
	zs_2.castShadow = true;
	zs_2.receiveShadow  = true;
	zs_2.position.x = 298+602 + xc;
	zs_2.position.y = 1064+72 + yc;
	zs_2.position.z = -2 + zc;
	scene.add(zs_2);
	
//});
}

main();
