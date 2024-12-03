
var baseUrl = "/member";
var currentStep = 1;
var member = {

    init: function () {
        currentStep = 1;
        member.fillDistrict();
        //$('#btnRegister').click(function () {
        //});
        member.showStep(currentStep);
    },

    fillDistrict: function () {
      
        $.ajax({
            url: baseUrl + '/GetDistrict', // URL to the action
            type: 'GET',
            data: { 'stateId': 1 },
            success: function (data) {

                var $dropdown = $('#ddlDistrict');
                $dropdown.empty(); // Clear existing options
                $dropdown.append('<option value="">Select</option>'); // Add a default option

                // Populate the dropdown with new options
                $.each(data, function (index, item) {

                    $dropdown.append($('<option></option>').val(item.value).html(item.name));
                });
              
            },
            error: function (xhr, status, error) {
                console.error('Error fetching district: ', error); // Handle error
            }
        });
    },

    fillAssembly: function () {
        $('#ddlAssembly').val('');
        $('#divloaddateaquired').show();
        member.fillBlock();
        member.fillParliament();
        $.ajax({
            url: baseUrl + '/GetAssembly', // URL to the action
            type: 'GET',
            data: { 'districtId': $('#ddlDistrict').val() },
            success: function (data) {

                var $dropdown = $('#ddlAssembly');
                $dropdown.empty(); // Clear existing options
                $dropdown.append('<option value="">Select</option>'); // Add a default option

                // Populate the dropdown with new options
                $.each(data, function (index, item) {

                    $dropdown.append($('<option></option>').val(item.value).html(item.name));
                });
                $('#divloaddateaquired').hide();
              
            },
            error: function (xhr, status, error) {
                console.error('Error fetching assembly: ', error); // Handle error
            }
        });
       
    },
    fillParliament: function () {
        $('#divloaddateaquired').show();
        $('#ddlParliament').val('');
        $.ajax({
            url: baseUrl + '/GetParliament', // URL to the action
            type: 'GET',
            data: { 'parliamentId': $('#ddlAssembly').val() },
            success: function (data) {

                var $dropdown = $('#ddlParliament');
                $dropdown.empty(); // Clear existing options
            

                // Populate the dropdown with new options
                $.each(data, function (index, item) {

                    $dropdown.append($('<option></option>').val(item.value).html(item.name));
                });
                $('#divloaddateaquired').hide();

            },
            error: function (xhr, status, error) {
                console.error('Error fetching assembly: ', error); // Handle error
            }
        });

    },
    fillBlock: function () {
        $('#ddlBlock').val('');
        $('#divloaddateaquired').show();
        $.ajax({
            url: baseUrl + '/GetBlock', // URL to the action
            type: 'GET',
            data: { 'districtId': $('#ddlDistrict').val() },
            success: function (data) {

                var $dropdown = $('#ddlBlock');
                $dropdown.empty(); // Clear existing options
                $dropdown.append('<option value="">Select</option>'); // Add a default option

                // Populate the dropdown with new options
                $.each(data, function (index, item) {

                    $dropdown.append($('<option></option>').val(item.value).html(item.name));
                });
                $('#divloaddateaquired').hide();
            },
            error: function (xhr, status, error) {
                console.error('Error fetching assembly: ', error); // Handle error
            }
        });
    },

    fillPanchayat: function () {
        $('#ddlPanchayat').val('');
        $('#divloaddateaquired').show();
        $.ajax({
            url: baseUrl + '/GetPanchayat', // URL to the action
            type: 'GET',
            data: { 'blockid': $('#ddlBlock').val() },
            success: function (data) {

                var $dropdown = $('#ddlPanchayat');
                $dropdown.empty(); // Clear existing options
                $dropdown.append('<option value="">Select</option>'); // Add a default option

                // Populate the dropdown with new options
                $.each(data, function (index, item) {

                    $dropdown.append($('<option></option>').val(item.value).html(item.name));
                });
                $('#divloaddateaquired').hide();
            },
            error: function (xhr, status, error) {
                console.error('Error fetching assembly: ', error); // Handle error
            }
        });
    },
    registerMember: function () {
       
        const memb = $('input[name="IsMember"]:checked').val();
        const title = document.getElementById('Title').value;
        const name = document.getElementById('Name').value;
        const mobile = document.getElementById('MobileNumber').value;
        const password = document.getElementById('txtPassword').value;
        const parliament = document.getElementById('ddlParliament').value;
        const block = document.getElementById('ddlBlock').value;
        const panchayat = document.getElementById('ddlPanchayat').value;
      //  const checked = $('input[name="flexCheckDefault"]:checked').length;

        const gender = $('input[name="Gender"]:checked').val(); //document.getElementById('ddlGender').value;
        const dob = document.getElementById('Dob').value;
        //const address = document.getElementById('txtAddress').value;
        const district = document.getElementById('ddlDistrict').value;
        const assembly = document.getElementById('ddlAssembly').value;
        const pincode = document.getElementById('txtPinCode').value;

        // Clear previous error messages
        document.getElementById('errorGender').style.display = 'none';
        document.getElementById('errorDob').style.display = 'none';
        //document.getElementById('errorAddress').style.display = 'none';
        document.getElementById('errorDistrict').style.display = 'none';
        document.getElementById('errorAssembly').style.display = 'none';
        document.getElementById('errorPincode').style.display = 'none';
        document.getElementById('errorBlock').style.display = 'none';
        document.getElementById('errorPanchayat').style.display = 'none';

        // Validate title
        if (gender === "") {
            document.getElementById('errorGender').innerText = "Please select a gender";
            document.getElementById('errorGender').style.display = 'block';
            // $("#ddlTitle").focus();
            return false;
        }

        // Validate name
        if (dob === "") {
            document.getElementById('errorDob').innerText = "Please enter dob";
            document.getElementById('errorDob').style.display = 'block';
            // $("#txtName").focus();
            return false;
        }
      
        if (district === "") {
            document.getElementById('errorDistrict').innerText = "Please select a district";
            document.getElementById('errorDistrict').style.display = 'block';
            // $("#txtName").focus();
            return false;
        }
        if (assembly === "") {
            document.getElementById('errorAssembly').innerText = "Please select a assembly";
            document.getElementById('errorAssembly').style.display = 'block';
            // $("#txtName").focus();
            return false;
        }
        if (block === "") {
            document.getElementById('errorBlock').innerText = "Please select a block";
            document.getElementById('errorBlock').style.display = 'block';
            // $("#txtName").focus();
            return false;
        }
        if (panchayat === "") {
            document.getElementById('errorPanchayat').innerText = "Please select a panchayat";
            document.getElementById('errorPanchayat').style.display = 'block';
            // $("#txtName").focus();
            return false;
        }
        if (pincode === "") {
            document.getElementById('errorPincode').innerText = "Please enter pin code";
            document.getElementById('errorPincode').style.display = 'block';
            // $("#txtName").focus();
            return false;
        }
        const pincodeRegex = /^[0-9]{6}$/; // Example for a 10-digit mobile number
        if (!pincodeRegex.test(pincode)) {
            document.getElementById('errorPincode').innerText = "Please enter a valid pin code (6 digits)";
            document.getElementById('errorPincode').style.display = 'block';
            return false;
        }
        var formData = {};     
        
        formData.isMember = memb;
        formData.title = title;
        formData.name = name;
        formData.mobileNumber = mobile;
        //formData.email = emailId;
        formData.password = password;

        formData.gender = gender;
        formData.dob = dob;
      //  formData.address = address;
        formData.DistrictId = district;
        formData.blockId = block;
        formData.panchayatId = panchayat;
        formData.constituencyId = parliament;
        formData.assemblyId = assembly;
        formData.pinCode = pincode;
        formData.photoUrl = $('#photoFileName').val();
       
        
        // disable button
        $("#btnRegister").prop("disabled", true);
        // add spinner to button
        $("#btnRegister").html(
            `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Please wait...`
        );
        $.ajax({
            url: "/Member/JoinMember",
            type: "POST",
            data: formData,
            success: function (response) {
                
                if (response.data && response?.data?.id > 0) {
                   
                    if (member.validateStep(currentStep)) {
                        if (currentStep < 3) {
                            currentStep++;
                            member.showStep(currentStep);
                        }
                    }
                    member.showStep(currentStep);
                    $("#memberdownload").attr("href", "/member/DownloadMembershipCard?param=" + response.data.mobileNumber);

                }
                else if (response.message != "") {
                    alert('Mobile number already exists!'); 
                    if (currentStep > 1) {
                        currentStep--;
                        member.showStep(currentStep);
                    }
                    $("#MobileNumber").focus();
                    $("#btnRegister").prop("disabled", false);
                    // add spinner to button
                    $("#btnRegister").html("Register");
                    return false;

                }
                else {
                    alert('something went wrong');
                }
            },
            error: function (request, status, error) {
                ;
            }
        });
    },


    showStep: function (step) {
        $('.step').removeClass('active'); // Hide all steps
        $('#step' + step).addClass('active'); // Show the current step
        $('.steps li').removeClass('active');
        $('#step' + step + '-indicator').addClass('active');
    },

    validateStep: function (step) {
        let isValid = true;

        // Validate inputs in the current step
        $('#step' + step + ' input, #step' + step + ' select' + step + ' textarea' + step + ' checkbox').each(function () {
            if ($(this).prop('required') && !$(this).val()) {
                isValid = false;
                $(this).css('border-color', 'red'); // Highlight invalid fields
            } else {
                $(this).css('border-color', '#ccc'); // Reset field style
            }
        });

        return isValid;
    },

    goPrev: function () {
        if (currentStep > 1) {
            currentStep--;
            member.showStep(currentStep);
        }
    },
    goNext: function () {

        // Clear previous error messages
        document.getElementById('errorTitle').style.display = 'none';
        document.getElementById('errorName').style.display = 'none';
        document.getElementById('errorMobile').style.display = 'none';
        //document.getElementById('errorEmail').style.display = 'none';
        document.getElementById('errorPassword').style.display = 'none';
        //document.getElementById('errorcheckbox').style.display = 'none';
        
        const title = document.getElementById('Title').value;
        const name = document.getElementById('Name').value;
        const mobile = document.getElementById('MobileNumber').value;
        const password = document.getElementById('txtPassword').value;
        //const emailId = document.getElementById('Email').value;
       // const checkbox = document.getElementById('flexCheckDefault');
      
        // Validate title
        if (title === "") {
            document.getElementById('errorTitle').innerText = "Please select a title";
            document.getElementById('errorTitle').style.display = 'block';
            $("#ddlTitle").focus();
            return false;
        }

        // Validate name
        if (name.trim() === "") {
            document.getElementById('errorName').innerText = "Please enter full name";
            document.getElementById('errorName').style.display = 'block';
            $("#txtName").focus();
            return false;
        }

        // Validate mobile number (simple validation, adjust regex as needed)
        const mobileRegex = /^[0-9]{10}$/; // Example for a 10-digit mobile number
        if (!mobileRegex.test(mobile)) {
            document.getElementById('errorMobile').innerText = "Please enter a valid mobile number (10 digits)";
            document.getElementById('errorMobile').style.display = 'block';
            return false;
        }
        if (password === "") {
            document.getElementById('errorPassword').innerText = "Please enter password";
            document.getElementById('errorPassword').style.display = 'block';
            return false;
        }

        //// Validate email format
        //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //if (emailId && !emailRegex.test(emailId)) {
        //    document.getElementById('errorEmail').innerText = "Please enter a valid email address";
        //    document.getElementById('errorEmail').style.display = 'block';
        //    return false;
        //}

        // Validate checkbox
        //if (!checkbox.checked) {
        //    document.getElementById('errorcheckbox').innerText = "You must declare that the information is true";
        //    document.getElementById('errorcheckbox').style.display = 'block';
        //    return false;
        //}
       
        if (member.validateStep(currentStep)) {
            if (currentStep < 3) {
                currentStep++;
                member.showStep(currentStep);
            }

        }

    },
}
