<?php

    if (isset($_POST['key'])) {

        $conn = new mysqli('localhost','root','','vehicle');

        // LOGIN
        if ($_POST['key'] == 'login'){
            $username = $conn->real_escape_string($_POST['username']);
            $password = $conn->real_escape_string($_POST['password']);
            $sql =  $conn->query("SELECT id FROM users WHERE username='$username' AND pass='$password'");
            $data = $sql -> fetch_array();
            $jsonArray;
            if($data){
                $jsonArray = array(
                    "result"=> $data['id']
                );
            }
            else{
                $jsonArray = array(
                    "result"=> "Username or Password Incorrect"
                );
            }
            echo(json_encode($jsonArray));
        }

           // Create New
        if ($_POST['key'] == 'add'){
            $name = $conn->real_escape_string($_POST['name']);
            $sex = $conn->real_escape_string($_POST['sex']);
            $state = $conn->real_escape_string($_POST['state']);
            $address = $conn->real_escape_string($_POST['address']);
            $user = $conn->real_escape_string($_POST['user']);

            // GENERATE PLATE NUMBER
            switch ($state) {
                case 'Abuja':
                    $part1 ="FW";
                    break;
                case 'Delta':
                $part1 ="AJ";
                    break;
                case 'Kogi':
                    $part1 ="KG";
                    break;
                 case 'Lagos':
                    $part1 ="APP";
                    break ;
                case 'Rivers':
                    $part1 ="DY";
                    break;   
                default:
                echo "Select State";             
            }

                $random_number=''; 

                $count=0;

                while ( $count < 3 ) {
                    $random_digit = mt_rand(0, 9);
                    
                    $random_number .= $random_digit;
                    $count++;
                }

                $permitted_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                // Output: 54esmdr0qf
                $part2= substr(str_shuffle($permitted_chars), 0, 3);

                $plate_no= $part1.$random_number.'-'.$part2;

            
                
            $sql =  $conn->query("INSERT INTO plate_num(myName,sex,addr,state,plate_no,created_by) VALUES ('$name','$sex','$address','$state','$plate_no','$user')");
           
            $jsonArray;
            if ($sql === TRUE) {
                echo $plate_no;
            }
            else{
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
           
            
            // echo(json_encode($jsonArray));
        }

        // VIEW READING FROM DATABASE
        if ($_POST['key'] == 'viewRowData'){
            $rowID = $conn->real_escape_string($_POST['rowID']);
            $sql =  $conn->query("SELECT * FROM plate_num WHERE id='$rowID'");
            while($data = $sql -> fetch_array()){
                $array = array(
                          'data'=>$data
                );

                  echo (json_encode($array));
            }
            
            // $jsonArray = array(
            //     'countryName'=> $data['countryName'],
            //     'shortDesc'=> $data['shortDesc'],
            //     'longDesc'=> $data['longDesc']
            // );
            
          
        }

        //GET ALL DTATA
        if ($_POST['key'] == 'getExistingData'){

            $sql = $conn->query("SELECT * FROM plate_num");
            if ($sql->num_rows > 0){
                $response = "";
                while ($data = $sql->fetch_array()){
                    $response = '
                    <tr>
                        <td>'.$data['id'].'</td>
                        <td id="plate_'.$data['id'].'">'.$data['myName'].'</td>
                        <td id="plate_'.$data['plate_no'].'">'.$data['plate_no'].'</td>
                        <td id="plate_'.$data['state'].'">'.$data['state'].'</td>
                        <td style="display:flex;justify-content:space-around">
                            <input type="button" onclick="editGet('.$data['id'].')" value="Edit" class="btn btn-primary">
                            <input type="button" onclick="view('.$data['id'].')" value="View" class="btn">
                            <input type="button" onclick="deleteRow('.$data['id'].')" value="Delete" class="btn btn-danger">
                        </td>
                    </tr>
                    ';
                    echo($response);
                }
               
            }else{
                exit('reachedMax');
            }
        }

    //    $rowID = $conn->real_escape_string($_POST['rowID']);
       
        //DELETE FROM DATABASE
        if($_POST['key'] == 'deleteRow'){
            $rowID = $conn->real_escape_string($_POST['rowID']);
            $conn->query("DELETE from plate_num WHERE id ='$rowID'");
            exit('The row has been deleted!');
        }

        // $name = $conn->real_escape_string($_POST['name']);
        // $shortDesc = $conn->real_escape_string($_POST['shortDesc']);
        // $longDesc = $conn->real_escape_string($_POST['longDesc']);

        // EDITING/UPDATE WRITING TO DATABASE
        if ($_POST['key'] == 'updateRow'){
            $name = $conn->real_escape_string($_POST['name']);
            $sex = $conn->real_escape_string($_POST['sex']);
            $state = $conn->real_escape_string($_POST['state']);
            $address = $conn->real_escape_string($_POST['address']);
            $user = $conn->real_escape_string($_POST['user']);
            $rowID = $conn->real_escape_string($_POST['rowID']);

            $conn->query("UPDATE plate_num SET myName = '$name', sex='$sex', addr = '$address',state='$state', updated_by='$user' WHERE id='$rowID'");
            exit($name.$sex.$state.$address.$user.$rowID);
        }
    }

?>