<?
 
class PlayerMat {
	public $player;
	public $tray;
	public $small_tokens;
}
class ActionCircle extends PlayerMat {
	function __construct(){ 
		$this->select_tray;
		$this->target_tray;
		$this->something = "HELLO!";
		$this->randCircle();
	}
	public function randCircle(){
		$color = array("pink", "orange", "yellow", "white", "green", "blue", "pink", "orange", "yellow", "white", "green", "blue",);
		$i = 0;
		while($color!=null){
			if($circle[$i]==null && $circle[$i][1]==null){
				$check = array_rand($color);
				$circle[$i][]=$color[$check];
				unset($color[$check]);
				$check = array_rand($color);
				$circle[$i][]=$color[$check];
				unset($color[$check]);
				$i++;
			}		
		}
		$this->circle =  $circle;
	}
	public function move(){//chosen tray
		$k = 0;
		$count = count($this->circle[$this->select_tray]);
		while($k<$count){
			$spot = $this->select_tray+$k+1;
			if($spot>5){
				$spot -= 6;
			}
			$this->circle[$spot][] = $this->circle[$this->select_tray][$k];
			unset($this->circle[$this->select_tray][$k]);
			$k++;
		}
		$this->target_tray =  $spot;//target tray
	}


	public function get(){
	
	}
	public function set(){
	
	}
}

/******************************************************************/
/* randTray() will generate a random action tray array for setup. */
/* Two pieces will be put in each of the six trays.               */
/* The generated tray array is returned as the output.            */
/******************************************************************/
function randTray(){
	$tray;
	$color = array("pink", "orange", "yellow", "white", "green", "blue",);
	$color2 = $color;
	$count = array(1,2,3,4,5,6,);
	$i = 0;
	while($color!=null && $color2!=null){
		if($tray[$i]==null && $tray[$i][1]==null){
			$check = array_rand($color);
			$tray[$i][]=$color[$check];
			unset($color[$check]);
			$check = array_rand($color2);
			$tray[$i][]=$color2[$check];
			unset($color2[$check]);
			$i++;
		}		
	}
	return $tray;
}

/*****************************************************************************/
/* move() will take an action tray array (&$tray) and a selected tray($tid). */
/* It splits the pieces in the tray one by one to the next consecutive tray. */
/* Returns target tray index.                                                */
/*****************************************************************************/
function move(&$tray, $tid){//chosen tray
	$k = 0;
	$count = count($tray[$tid]);
	while($k<$count){
		$spot = $tid+$k+1;
		if($spot>5){
			$spot -= 6;
		}
		$tray[$spot][] = $tray[$tid][$k];
		unset($tray[$tid][$k]);
		$k++;
	}
	return $spot;//target tray
}

/******************************************************************************/
/* Notes:																	  */
/* 	  Additional functionality to be added--                                  */
/*      1. Ability to manually create tray array.				     		  */
/*      2. In move() - Ability to choose which pieces to move to next tray.   */
/******************************************************************************/

?>
