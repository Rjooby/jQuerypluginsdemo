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
		new Name({ fname: "Wyatt", lname: "Cenac"})
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