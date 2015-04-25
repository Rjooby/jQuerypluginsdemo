(function () {
	if (typeof NameApp === "undefined") {
		window.NameApp = {};
	}

	var Name = NameApp.Name = function (attrs) {
		this.fname = attrs.fname;
		this.lname = attrs.lname;
	};

	Name.all = [
		new Name({ fname: "Jon", lname: "Liebowitz"}),
		new Name({ fname: "Steven", lname: "Colbert"}),
		new Name({ fname: "Steve", lname: "Carrell"}),
		new Name({ fname: "Wyatt", lname: "Cenac"}),
		new Name({ fname: "Rob", lname: "Cordry"}),
		new Name({ fname: "Jessica", lname: "Williams"}),
		new Name({ fname: "John", lname: "Oliver"}),
		new Name({ fname: "Samantha", lname: "Bee"}),
		new Name({ fname: "Wolf", lname: "Blitzer"}),
		new Name({ fname: "Anderson", lname: "Cooper"}),
		new Name({ fname: "Megan", lname: "Kelly"}),
		new Name({ fname: "Bill", lname: "O'Reilly"}),
		new Name({ fname: "Connie", lname: "Chung"}),
		new Name({ fname: "Mr.", lname: "G"}),
		new Name({ fname: "Diane", lname: "Sawyer"}),
		new Name({ fname: "Katie", lname: "Couric"}),

	];

	Name.search = function (searchQuery) {
		searchQuery = searchQuery.toLowerCase();

		var results = []
		Name.all.forEach(function (name) {
			var fullName = name.fullName().toLowerCase();
			if (fullName.match(searchQuery)) {
				results.push(name);
			}
		});

		return results;
	}

	Name.prototype.fullName = function () {
		return [this.fname, this.lname].join(" ");
	};
})();